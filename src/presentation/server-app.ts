import { CreateTable } from '../domain/use-cases/create-table.use-case';

interface RunOptions {
	base: number;
	limit: number;
	showTable: boolean;
}

export class ServerApp {
	static run(runOptions: RunOptions) {
		console.log('Server is running...');
		const { base, limit, showTable } = runOptions;

		const table = new CreateTable().execute({ base, limit });

		if (showTable) {
			console.log(table);
		}
	}
}
