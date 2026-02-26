const originalLog = console.log.bind(console);

const colors = {
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
};

let char = '·';
let color = '';

function configure({ char: c, color: col } = {}) {
	if (c) char = c;
	if (col && colors[col]) color = colors[col];
}

console.log = (...args) => {
	const separator = `${color}${char.repeat(process.stdout.columns)}\x1b[0m`;
	originalLog(`${separator}\n`, ...args);
};
exports.configure = configure;
