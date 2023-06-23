import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ENVIRONMENT_INITIALIZER,
  InjectionToken,
  PLATFORM_ID,
  makeEnvironmentProviders,
} from '@angular/core';

function clarityScript(projectId: string): string {
  return `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "${projectId}");`;
}

const NGX_CLARITY_CONFIG_TOKEN = new InjectionToken<NgxClarityConfiguration>(
  'ngx-clarity.config'
);

export type NgxClarityConfiguration = Readonly<{
  /**
   * Whether or not to inject Clarity scripts on application initialization.
   */
  enabled: boolean;
  /**
   * The Microsoft Clarity project ID.
   */
  projectId: string;
}>;

/**
 * Builds configured providers for injecting Microsoft Clarity scripts during
 * application initialization.
 * @param config The runtime configuration for the Clarity providers.
 * @returns the Clarity providers.
 */
export function provideClarity(config: NgxClarityConfiguration) {
  return makeEnvironmentProviders([
    { provide: NGX_CLARITY_CONFIG_TOKEN, useValue: config },
    {
      provide: ENVIRONMENT_INITIALIZER,
      useFactory: (
        platformId: Object,
        d: Document,
        { enabled, projectId }: NgxClarityConfiguration
      ) => {
        return () => {
          if (isPlatformBrowser(platformId) && enabled) {
            const s = d.createElement('script');
            s.type = 'text/javascript';
            s.innerHTML = clarityScript(projectId);
            d.head.appendChild(s);
          }
        };
      },
      deps: [PLATFORM_ID, DOCUMENT, NGX_CLARITY_CONFIG_TOKEN],
      multi: true,
    },
  ]);
}
