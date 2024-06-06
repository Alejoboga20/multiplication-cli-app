import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
	base: number;
	limit: number;
	showTable: boolean;
	name: string;
	destination: string;
}

export class ServerApp {
	static run(runOptions: RunOptions) {
		console.log('Server is running...');

		const { base, limit, showTable, name, destination } = runOptions;

		const table = new CreateTable().execute({ base, limit });

		const wasCreated = new SaveFile().execute({
			fileContent: table,
			fileName: name,
			fileDestination: destination,
		});

		console.log(`File created: ${wasCreated ? 'Yes' : 'No'}`);

		if (showTable) {
			console.log(table);
		}
	}
}
