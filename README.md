# Ngx-Clarity

[![Build](https://github.com/jadengis/ngx-clarity/actions/workflows/test.yml/badge.svg)](https://github.com/jadengis/ngx-clarity/actions/workflows/test.yml)
[![Test](https://github.com/jadengis/ngx-clarity/actions/workflows/build.yml/badge.svg)](https://github.com/jadengis/ngx-clarity/actions/workflows/build.yml)
[![Lint](https://github.com/jadengis/ngx-clarity/actions/workflows/lint.yml/badge.svg)](https://github.com/jadengis/ngx-clarity/actions/workflows/lint.yml)

A useful Angular library that automatically injects the script tag required to use [Microsoft Clarity](https://clarity.microsoft.com/).

## Installation

npm:

```bash
npm install --save ngx-clarity
```

Yarn:

```bash
yarn add ngx-clarity
```

## Compatibility

| Version | Angular Version |
| ------- | --------------- |
| `1.x.x` | `>=13 <15`      |
| `2.x.x` | `>=15 <20`      |

## Features

- Automatically inject scripts for [Microsoft Clarity](https://clarity.microsoft.com/).

## Usage

Import `provideClarity` from `ngx-clarity` and pass the required configuration when using it as a provider during application bootstrap.

```typescript
import { provideClarity } from 'ngx-clarity';

@NgModule({
  providers: [
    provideClarity({
      enabled: true,
      projectId: 'my-project-id',
    }),
  ],
})
export class AppModule {}

// Or if you are using standalone bootstrap

bootstrapApplication(AppComponent, {
  providers: [
    provideClarity({
      enabled: true,
      projectId: 'my-project-id',
    }),
  ],
});
```

The supported configuration parameters are:

| Property  | Requirement | Description                                                                                                   |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| enabled   | Required    | Whether or not this module is enabled. Useful for disabling the analytics script in development environments. |
| projectId | Required    | Your Microsoft Clarity project Id. This is found in the Microsoft Clarity console.                            |

## License

MIT
