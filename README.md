# console-separator

- Adds a customizable separator line before each console.log.
- Adds 3 functions (console.elog, console.alog, console.plog)


## Installation
```bash
npm install console-separator
```

### Usage and configuration - Type module
```javascript
import 'console-separator'; // default separator '·'
import { configure } from 'console-separator';

configure({ 
  char: '-',   // character to repeat
  color: 'green' // red, green, yellow, blue, magenta, cyan, white
});
```
### Usage and configuration - CommonJS
```javascript
require('console-separator');; // default separator '·'
const { configure } = require('console-separator');

configure({ 
  char: '-',   // character to repeat
  color: 'green' // red, green, yellow, brown, blue, magenta, cyan, white
});
```

## Preview
![description](https://raw.githubusercontent.com/Dranhoc/npm_package-console-separator/master/screenshot.png)

## VSCode Snippets
To get autocompletion shortcuts for `console.alog`, `console.elog` and `console.plog` (just type `alog`, `elog` or `plog` and hit `Tab`), copy the contents of `snippets.json` into your VSCode user snippets:

`Ctrl+Shift+P` → `Preferences: Configure User Snippets` → `javascript.json`
