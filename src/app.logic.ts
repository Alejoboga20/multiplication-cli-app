import fs from 'fs';

let outputMessage = '';
const outputDir = 'outputs';

const base = 5;
const headerMessage = `
==============================
      Table of: ${base}
==============================\n
`;

for (let i = 1; i <= 10; i++) {
	outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(`${outputDir}/table-of-${base}-output.txt`, outputMessage);
console.log('File created!');
