---
id: styling-theming
title: Styling and theming
---

Styling is fully optional. You can override as per your choice

### Styling the input

The input box automatically takes class of the daterangepicker tag

### Using from Unpkg

Include this css file in your html
[https://unpkg.com/angular-datetimerangepicker/styles/styles.css](https://unpkg.com/angular-datetimerangepicker@2.1.5/styles/styles.css)

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/angular-datetimerangepicker/styles/styles.css"
/>
```

### Using from node_modules

add following path to `angular.json`'s style section if you are already using bootstrap <br/>
`./node_modules/angular-datetimerangepicker/styles/styles.css`

or using with bundler

```js
    import `./node_modules/angular-datetimerangepicker/styles/styles.css`;
```

### Theming

The component supports two themes light and dark. See the [Options section](/docs/daterangepicker/configuration-options)

or you can use following css variables to override the style

the styles.css defines following css variables with specified default values

```css
:root {
  --drp-input-height: 33px;
  --drp-input-border-radius: 4px;
  --drp-bg: hsla(0, 0%, 98%);
  --drp-fg: hsla(0, 0%, 20%);
  --drp-shadow-color: rgba(0, 0, 0, 0.2);
  --drp-hover-bg: hsla(0, 0%, 80%);
  --drp-hover-fg: hsla(0, 0%, 20%);
  --drp-outline-color: hsl(240deg, 50%, 30%);
  --drp-input-border-color: #666;
  --drp-input-disabled-color: #dedede;
  --drp-flyout-width: auto;
  --drp-flyout-single-calendar-width: auto;
}
```
