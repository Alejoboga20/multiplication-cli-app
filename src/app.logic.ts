import fs from 'fs';
import { yarg } from './config';

let outputMessage = '';
const outputDir = 'outputs';

const base = yarg.b;
const limit = yarg.l;
const show = yarg.s;

const headerMessage = `
==============================
      Table of: ${base}
==============================\n
`;

for (let i = 1; i <= limit; i++) {
	outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(`${outputDir}/table-of-${base}-output.txt`, outputMessage);

if (show) {
	console.log(outputMessage);
}
console.log('File created!');
