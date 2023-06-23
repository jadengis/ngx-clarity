import { DOCUMENT } from '@angular/common';
import { getTestBed } from '@angular/core/testing';
import { provideClarity } from './ngx-clarity';

describe('provideClarity', () => {
  const projectId = 'projectId';

  afterEach(() => {
    fetchScript()?.remove();
  });

  describe('when enabled', () => {
    configureEnvironment(true);

    it('should bootstrap and inject clarity script', () => {
      const script = fetchScript();
      expect(script).toBeTruthy();
      expect(script.async).toEqual(1);
    });
  });

  describe('when disabled', () => {
    configureEnvironment(false);

    it('should bootstrap but not inject clarity script', () => {
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
        providers: [provideClarity({ enabled, projectId })],
      });
    });
  }
});
