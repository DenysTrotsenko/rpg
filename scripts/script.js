const fs = require('fs/promises');
console.clear();
fs.readFile('./items.json', 'utf8')
  .then((data) => {
    const json = JSON.parse(data);
    const modified = json.map((entry, index) => {
      entry.encumbrance = Number(entry.encumbrance);
      entry.cost = Number(entry.cost);

      return entry;
    });
    const stringified = JSON.stringify(modified);
    console.log(stringified);
  })
  .catch((error) => {
    // Do something if error
  });
