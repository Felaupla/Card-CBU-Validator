const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('./uploads/file.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Validate the specific field
    if (!row.fieldToValidate) {
      console.log(`Invalid row: ${JSON.stringify(row)}`);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });