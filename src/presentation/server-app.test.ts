import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

const runOptions = {
	base: 2,
	limit: 10,
	showTable: false,
	name: 'test-filename',
	destination: 'test-destination',
};

describe('Server App Tests', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should create serverApp instance', () => {
		const serverApp = new ServerApp();

		expect(serverApp).toBeInstanceOf(ServerApp);
	});

	test('should run serverApp with options', async () => {
		const logSpy = jest.spyOn(console, 'log').mockImplementation();

		const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
		const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

		ServerApp.run(runOptions);

		expect(logSpy).toHaveBeenCalledWith('Server is running...');
		expect(logSpy).toHaveBeenCalledWith('File created: Yes');

		expect(createTableSpy).toHaveBeenCalledTimes(1);
		expect(createTableSpy).toHaveBeenCalledWith({ base: runOptions.base, limit: runOptions.limit });

		expect(saveFileSpy).toHaveBeenCalledTimes(1);
		expect(saveFileSpy).toHaveBeenCalledWith({
			fileContent: expect.any(String),
			fileName: runOptions.name,
			fileDestination: runOptions.destination,
		});
	});

	test('should run serverApp with custom mocked alues', async () => {
		const logMock = jest.fn();
		const createTableMock = jest.fn().mockReturnValue('mocked-table');
		const saveFileMock = jest.fn().mockReturnValue(true);

		console.log = logMock;
		CreateTable.prototype.execute = createTableMock;
		SaveFile.prototype.execute = saveFileMock;

		ServerApp.run(runOptions);

		expect(logMock).toHaveBeenCalledWith('Server is running...');
		expect(logMock).toHaveBeenCalledWith('File created: Yes');

		expect(createTableMock).toHaveBeenCalledTimes(1);
		expect(createTableMock).toHaveBeenCalledWith({
			base: runOptions.base,
			limit: runOptions.limit,
		});

		expect(saveFileMock).toHaveBeenCalledTimes(1);
		expect(saveFileMock).toHaveBeenCalledWith({
			fileContent: 'mocked-table',
			fileName: runOptions.name,
			fileDestination: runOptions.destination,
		});
	});
});
