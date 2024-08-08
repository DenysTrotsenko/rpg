const fs = require('fs');
const data = fs.readFileSync('./items.json', { encoding: 'utf8' });
const json = JSON.parse(data);
const modified = json.map((entry, index) => {
  // if (entry.data.traits?.includes(PEN_6)) {
  //   entry.data.traits = entry.data.traits.filter(i => i !== PEN_6);
  //   entry.data.penetration = 6;
  // }

  return entry;
});
fs.writeFileSync('./items2.json', JSON.stringify(modified));
