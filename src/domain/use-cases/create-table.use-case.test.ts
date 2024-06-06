import { CreateTable } from './create-table.use-case';
describe('Create Table Use Case', () => {
	test('should create a table with default values', () => {
		const options = { base: 2 };
		const createTable = new CreateTable();

		const table = createTable.execute(options);
		const rows = table.split('\n');

		expect(createTable).toBeInstanceOf(CreateTable);
		expect(rows).toHaveLength(10);
		expect(table).toContain('2 x 1 = 2\n');
	});

	test('should create a table with custom values', () => {
		const options = { base: 3, limit: 5 };
		const createTable = new CreateTable();

		const table = createTable.execute(options);
		const rows = table.split('\n');

		expect(rows).toHaveLength(5);
		expect(table).toContain('3 x 1 = 3\n');
	});
});
