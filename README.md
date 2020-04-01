# Theme Switcher
This is a simple library that helps in programatically detecting when system theme has been switched

## Usage
On the browser
```html
<!-- Search theme-switch-listener on jsdelivr and replace src string with the one provided by jsdelivr  -->
<script src="https://cdn.jsdelivr.net/npm/theme-switch-listener@0.0.3/dist/client.min.js"></script>

const switcher = Themer.ThemeSwitcher()
```
Or on Vue, React or Angular
```js
import ThemeSwitcher from 'theme-switcher-listener';
```
Create a `ThemeSwitcher` instance
```js
const switcher = new ThemeSwitcher();
```
`switcher` object contains only one method `init`   
The method takes an optional `element` parameter
```js
// Without element
switcher.init();
```
In the case above, an event `theme-switched` is attached to the `window` object

```js
// With element
const element = document.querySelector('#body');

switcher.init(element);
```
In the case above, the event `theme-switched` is attatched to the `element` provided.

## Listen to `theme-switched` event
```js
// You can replace window with the element passed to init if any
window.addEventListener('theme-switched', (e) => {
    // e.detail = { e: MediaQueryListEvent, theme: 'light' | 'dark' }
    if(e.detail.theme === 'light') {
        // Switch website theme to light
    } else if (e.detail.theme === 'dark') {
        // Switch website theme to dark
    }
})
```

You are free to make a pull request if you would like to contribute.