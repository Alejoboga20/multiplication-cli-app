import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
	.options('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Multiplication table base',
	})
	.options('l', {
		alias: 'limit',
		type: 'number',
		default: 10,
		describe: 'Multiplication table limit',
	})
	.options('s', {
		alias: 'show',
		type: 'boolean',
		default: false,
		describe: 'Show multiplication table',
	})
	.options('n', {
		alias: 'name',
		type: 'string',
		default: 'multiplication-table',
		describe: 'File name',
	})
	.options('d', {
		alias: 'destination',
		type: 'string',
		default: 'outputs',
		describe: 'File destination',
	})
	.check((argv, options) => {
		if (argv.b < 1 || argv.b > 20) {
			throw new Error('Base must be between 1 and 20');
		}

		return true;
	})
	.parseSync();
