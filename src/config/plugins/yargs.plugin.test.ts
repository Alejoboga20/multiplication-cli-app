const runCommand = async (args: string[]) => {
	process.argv = [...process.argv, ...args];
	const { yarg } = await import('./yargs.plugin');

	return yarg;
};

describe('Yargs Tests', () => {
	test('should return default values', async () => {
		const yarg = await runCommand(['-b', '5']);

		expect(yarg.b).toBe(5);
		expect(yarg.l).toBe(10);
		expect(yarg.s).toBe(false);
		expect(yarg.n).toBe('multiplication-table');
		expect(yarg.d).toBe('outputs');
	});
});
