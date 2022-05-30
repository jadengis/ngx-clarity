import { DOCUMENT } from '@angular/common';
import { getTestBed } from '@angular/core/testing';
import { NgxClarityModule } from './ngx-clarity.module';

describe('NgxClarityModule', () => {
  const projectId = 'projectId';

  afterEach(() => {
    fetchScript()?.remove();
  });

  describe('with module enabled', () => {
    configureEnvironment(true);

    it('should bootstrap and inject clarity script', () => {
      expect(getTestBed().inject(NgxClarityModule)).toBeTruthy();
      const script = fetchScript();
      expect(script).toBeTruthy();
      expect(script.async).toEqual(1);
    });
  });

  describe('with module disabled', () => {
    configureEnvironment(false);

    it('should bootstrap but not inject clarity script', () => {
      expect(getTestBed().inject(NgxClarityModule)).toBeTruthy();
      const script = fetchScript();
      expect(script).toBeFalsy();
    });
  });

  function fetchScript() {
    const document = getTestBed().inject(DOCUMENT);
    return document.querySelector(
      `script[src='https://www.clarity.ms/tag/${projectId}']`
    ) as HTMLScriptElement;
  }

  function configureEnvironment(enabled: boolean) {
    beforeEach(() => {
      getTestBed().configureTestingModule({
        imports: [
          NgxClarityModule.forRoot({
            enabled,
            projectId,
          }),
        ],
      });
    });
  }
});
