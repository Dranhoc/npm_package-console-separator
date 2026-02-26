# console-separator

Adds a customizable separator line before each console.log.

## Installation
```bash
npm install console-separator
```

### Usage - Type module
```javascript
import 'console-separator'; // default separator '·'
```
### Usage - CommonJS
```javascript
require('console-separator');; // default separator '·'
```

### Configuration
```javascript
import { configure } from 'console-separator';
// or in CommonJS
const { configure } = require('console-separator');

configure({ 
  char: '-',   // character to repeat
  color: 'green' // red, green, yellow, blue, magenta, cyan, white
});
```
