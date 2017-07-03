# eslint-config-sku

This package includes the shareable ESLint configuration used by [sku](https://github.com/seek-oss/sku).

## Usage in sku Projects

The easiest way to use this configuration is with [sku](https://github.com/seek-oss/sku), which includes it by default.

**You don’t need to install it separately in sku projects.**

## Usage Outside of sku

If you want to use this ESLint configuration in a project not built with sku, you can install it with following steps.

First, install this package, ESLint and the necessary plugins listed in this project's [package.json](package.json).

Then create a file named `.eslintrc` with following contents in the root folder of your project:

```js
{
  "extends": "sku"
}
```

You can override the settings from `eslint-config-sku` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

## License

MIT.
