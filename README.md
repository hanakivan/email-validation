# email-validation 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/email-validation?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/email-validation)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/email-validation)](https://www.npmjs.com/package/@ivanhanak_com/email-validation)

A simple & lightweight (>0.1kb) js library to validate an email address.

This validator implements [RFC 2822](https://tools.ietf.org/html/rfc2822#section-3.4.1) regex. 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/email-validation
```

Using yarn:

```sh
yarn add @ivanhanak_com/email-validation
```

## Import
```javascript
import validateEmail from '@ivanhanak_com/email-validation';
```

## Usage   

```javascript
const emailAddress = "my-email-address@example.com";
const isEmailValid = validateEmail(emailAddress);
```

## Browser support
IE10+