const testFolder = '../projects/anno-1800/src/assets/images/map/portraits';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  const data = files.map(file => {
    return {
      id: file.split('.')[0],
      name: file
    }
  });

  console.log(data);
});
