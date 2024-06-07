import { ServerApp } from './presentation/server-app';

describe('App Tests', () => {
	test('should run server with default values', async () => {
		const runServerAppMock = jest.fn();
		ServerApp.run = runServerAppMock;

		process.argv = [...process.argv, '-b', '2', '-l', '10', '-s', '-n', 'test', '-d', 'test'];
		await import('./app');

		expect(runServerAppMock).toHaveBeenCalledWith({
			base: 2,
			limit: 10,
			showTable: true,
			name: 'test',
			destination: 'test',
		});
	});
});
