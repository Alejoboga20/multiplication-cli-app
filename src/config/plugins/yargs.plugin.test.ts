const runCommand = async (args: string[]) => {
	process.argv = [...process.argv, ...args];
	const { yarg } = await import('./yargs.plugin');

	return yarg;
};

const originalArgv = process.argv;

const CUSTOM_BASE = 5;
const CUSTOM_LIMIT = 20;
const CUSTOM_SHOW_TABLE = true;
const CUSTOM_NAME = 'custom-name';
const CUSTOM_DIRECTORY = 'custom-directory';

describe('Yargs Tests', () => {
	beforeEach(() => {
		process.argv = originalArgv;
		jest.resetModules();
	});

	test('should return default values', async () => {
		const yarg = await runCommand(['-b', '5']);

		expect(yarg.b).toBe(5);
		expect(yarg.l).toBe(10);
		expect(yarg.s).toBe(false);
		expect(yarg.n).toBe('multiplication-table');
		expect(yarg.d).toBe('outputs');
	});

	test('should return custom values', async () => {
		const yarg = await runCommand([
			'-b',
			`${CUSTOM_BASE}`,
			'-l',
			`${CUSTOM_LIMIT}`,
			'-s',
			'-n',
			`${CUSTOM_NAME}`,
			'-d',
			`${CUSTOM_DIRECTORY}`,
		]);

		expect(yarg.b).toBe(CUSTOM_BASE);
		expect(yarg.l).toBe(CUSTOM_LIMIT);
		expect(yarg.s).toBe(CUSTOM_SHOW_TABLE);
		expect(yarg.n).toBe(CUSTOM_NAME);
		expect(yarg.d).toBe(CUSTOM_DIRECTORY);
	});
});
