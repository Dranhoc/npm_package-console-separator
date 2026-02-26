const originalLog = console.log.bind(console);

const colors = {
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	brown: '\x1b[38;5;130m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
	bold: '\x1b[1m',
	reset: '\x1b[0m',
};

let char = '·';
let color = '';

export function configure({ char: c, color: col } = {}) {
	if (c) char = c;
	if (col && colors[col]) color = colors[col];
}

console.log = (...args) => {
	const separator = `${color}${char.repeat(process.stdout.columns)}\x1b[0m`;
	originalLog(`${separator}\n`, ...args);
};

/**
 * Logs a message in red and bold with 🚨 emojis
 * @param {...any} args - The values to log
 * @example console.alog('Something went wrong!');
 */
console.alog = (...args) => {
	originalLog(colors.red, colors.bold, '🚨  ', ...args, '  🚨', colors.reset);
};

/**
 * Logs a message in yellow and bold with 🤌 emojis
 * @param {...any} args - The values to log
 * @example console.elog('Check this out!');
 */
console.elog = (...args) => {
	originalLog(colors.yellow, colors.bold, '🤌   ', ...args, '  🤌', colors.reset);
};

/**
 * Logs a message in brown and bold with 💩 emojis
 * @param {...any} args - The values to log
 * @example console.plog('Dirty stuff here');
 */
console.plog = (...args) => {
	originalLog(colors.brown, colors.bold, '💩  ', ...args, '  💩', colors.reset);
};
