import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

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

		const wasCreated = new SaveFile().execute({
			fileContent: table,
			fileName: 'table',
			fileDestination: `outputs/table-of-${base}-output`,
		});

		console.log(`File created: ${wasCreated ? 'Yes' : 'No'}`);

		if (showTable) {
			console.log(table);
		}
	}
}
