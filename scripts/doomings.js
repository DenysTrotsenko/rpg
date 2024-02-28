const fs = require('fs/promises');
console.clear();
fs.readFile('./doomings.json', 'utf8')
  .then((data) => {
    // Do something with the data
    const json = JSON.parse(data);
    const modified = json.map((entry, index) => {
      entry.name = entry.labels?.description;
      entry.order = index + 1;
      delete entry.labels;

      return entry;
    });
    const stringified = JSON.stringify(modified);
    console.log(stringified);
  })
  .catch((error) => {
    // Do something if error
  });
