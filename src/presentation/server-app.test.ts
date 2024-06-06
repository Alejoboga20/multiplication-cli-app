import { ServerApp } from './server-app';

describe('Server App Tests', () => {
	test('should create serverApp instance', () => {
		const serverApp = new ServerApp();

		expect(serverApp).toBeInstanceOf(ServerApp);
	});
});
