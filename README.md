# Ngx-Clarity

[![Build](https://github.com/jadengis/ngx-clarity/actions/workflows/test.yml/badge.svg)](https://github.com/jadengis/ngx-clarity/actions/workflows/test.yml)
[![Test](https://github.com/jadengis/ngx-clarity/actions/workflows/build.yml/badge.svg)](https://github.com/jadengis/ngx-clarity/actions/workflows/build.yml)
[![Lint](https://github.com/jadengis/ngx-clarity/actions/workflows/lint.yml/badge.svg)](https://github.com/jadengis/ngx-clarity/actions/workflows/lint.yml)


A useful Angular module that automatically injects the script tag required to use [Microsoft Clarity](https://clarity.microsoft.com/).

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

## Features

- Automatically inject scripts for [Microsoft Clarity](https://clarity.microsoft.com/).

## Usage

Import the `NgxClarityModule` into your `AppModule` using the `forRoot` method to provide the required configuration.

```typescript
import { NgxClarityModule } from 'ngx-clarity';

@NgModule({
  imports: [
    NgxClarityModule.forRoot({
      enabled: true,
      projectId: 'my-project-id',
    }),
  ],
})
export class AppModule {}
```

The supported configuration parameters are:

| Property  | Requirement | Description                                                                                                   |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| enabled   | Required    | Whether or not this module is enabled. Useful for disabling the analytics script in development environments. |
| projectId | Required    | Your Microsoft Clarity project Id. This is found in the Microsoft Clarity console.                            |

## License

MIT
