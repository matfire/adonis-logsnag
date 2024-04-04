# Adonis Logsnag

![NPM Version](https://img.shields.io/npm/v/%40matfire%2Fadonis-logsnag?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/matfire/adonis-logsnag?style=for-the-badge)
A package to expose a [logsnag](https://logsnag.com) instance inside AdonisJS's http handler.

## Install

install the package by using 
```sh
npm install @matfire/adonis-logsnag
```

## Configure

configure the package using **ace**
```sh
node ace configure @matfire/adonis-logsnag
```

This will create a **logsnag.ts** config file in the **config** folder, along with adding a couple validation rules for your .env file.
Once all this is done, you'll need to add some variable to the .env:

- LOGSNAG_TOKEN: your logsnag token
- LOGSNAG_PROJECT: your logsnag project id

## Use

Once the module is enabled, it will inject a **logsnag** instance into your HttpContext: you can use like you would any logsnag instance.
One way to get that instance would be:

```js
class AppController {
  index({logsnag}: HttpContext) {
    logsnag.track() // or anything else logsnag can do
  }
}
```
