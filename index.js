// READING AND WRTING THE FILE SYNCHRONOUSLY (Blocking, synchronous way)

import fs from 'fs';
import { formatDate, formatTime } from './helper.js';
// READ FROM FILE
const textFile = fs.readFileSync('./txt/input.txt', 'utf-8');

// V             V
// file location      character endcoding
/*

CHARACTER ENCODING 
Character encoding tells computers how to interpret digital data into letters, numbers and symbols. This is done by assigning a specific numeric value to a letter,
number or symbol.
*/

// WRITE TO FILE (Blocking, synchronous way)
const date = new Date(new Date());

const formatedTime = formatTime(date);
const formatedDate = formatDate(date);

fs.writeFileSync(
  './txt/output.txt',
  `this is the data that is added to this file. Text added on  ${formatedDate} at ${formatedTime}`
);

//

// READING AND WRTING THE FILE ASYNCHRONOUSLY ((Non-Blocking, asynchronous way))

fs.readFile('./txt/read-this.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
let dataToWrite = `Text added on ${formatedDate} at ${formatedTime}`;

fs.writeFile('./txt/final.txt', dataToWrite, 'utf-8', (err) => {
  console.log(err);
});
