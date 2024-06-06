import { SaveFile } from './save-file.use-case';
import fs from 'fs';

const DEFAULT_FILE_NAME = 'table';
const DEFAULT_FILE_DESTINATION = 'outputs';
const FILE_CONTENT = 'test-content';

const CUSTOM_FILE_NAME = 'custom-name';
const CUSTOM_FILE_DESTINATION = 'custom-destination';

const cleanUp = () => {
	fs.rmSync(DEFAULT_FILE_DESTINATION, { recursive: true, force: true });
};

describe('Save File Use Case', () => {
	afterEach(() => {
		cleanUp();
	});

	test('should save a file with default values', () => {
		const options = { fileContent: FILE_CONTENT };

		const saveFile = new SaveFile();
		const result = saveFile.execute(options);

		const checkFile = fs.existsSync(`${DEFAULT_FILE_DESTINATION}/${DEFAULT_FILE_NAME}.txt`);
		const fileContent = fs.readFileSync(`${DEFAULT_FILE_DESTINATION}/${DEFAULT_FILE_NAME}.txt`, {
			encoding: 'utf-8',
		});

		expect(saveFile).toBeInstanceOf(SaveFile);
		expect(result).toBeTruthy();
		expect(checkFile).toBeTruthy();
		expect(fileContent).toEqual(options.fileContent);
	});

	test('should save a file with custom values', () => {
		const options = {
			fileContent: FILE_CONTENT,
			fileName: CUSTOM_FILE_NAME,
			fileDestination: CUSTOM_FILE_DESTINATION,
		};

		const saveFile = new SaveFile();
		const result = saveFile.execute(options);

		const checkFile = fs.existsSync(`${CUSTOM_FILE_DESTINATION}/${CUSTOM_FILE_NAME}.txt`);
		const fileContent = fs.readFileSync(`${CUSTOM_FILE_DESTINATION}/${CUSTOM_FILE_NAME}.txt`, {
			encoding: 'utf-8',
		});

		expect(result).toBeTruthy();
		expect(checkFile).toBeTruthy();
		expect(fileContent).toEqual(options.fileContent);
	});
});
