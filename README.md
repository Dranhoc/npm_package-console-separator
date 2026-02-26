# console-separator

Adds a customizable separator line before each console.log.

## Installation
```bash
npm install console-separator
```

## Usage
```javascript
import 'console-separator'; // default separator ·
```

## Configuration
```javascript
import { configure } from 'console-separator';

configure({ 
  char: '-',   // character to repeat
  color: 'cyan' // red, green, yellow, blue, magenta, cyan, white
});
```
