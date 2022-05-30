import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Inject,
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  PLATFORM_ID,
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
  enabled: boolean;
  projectId: string;
}>;

@NgModule({})
export class NgxClarityModule {
  constructor(
    @Inject(PLATFORM_ID)
    platformId: Object,
    @Inject(DOCUMENT)
    d: Document,
    @Inject(NGX_CLARITY_CONFIG_TOKEN)
    { enabled, projectId }: NgxClarityConfiguration
  ) {
    if (isPlatformBrowser(platformId) && enabled) {
      const s = d.createElement('script');
      s.type = 'text/javascript';
      s.innerHTML = clarityScript(projectId);
      d.head.appendChild(s);
    }
  }

  static forRoot(
    config: NgxClarityConfiguration
  ): ModuleWithProviders<NgxClarityModule> {
    return {
      ngModule: NgxClarityModule,
      providers: [{ provide: NGX_CLARITY_CONFIG_TOKEN, useValue: config }],
    };
  }
}
