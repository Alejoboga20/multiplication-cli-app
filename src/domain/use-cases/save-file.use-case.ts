import fs from 'fs';
export interface SaveFileUseCase {
	execute: (options: Options) => boolean;
}

export interface Options {
	fileContent: string;
	fileName?: string;
	fileDestination?: string;
}

export class SaveFile implements SaveFileUseCase {
	constructor() {}

	execute({ fileContent, fileName = 'table', fileDestination = 'outputs' }: Options): boolean {
		try {
			fs.mkdirSync(fileDestination, { recursive: true });
			fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

			console.log('File Created');
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
