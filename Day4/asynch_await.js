const fs = require('fs');
const path = require('path');
const data = "Nguyen Thai Quyen";

const addressSaved = path.resolve('./writeFile.txt') ;  // check duong dan co loi ko chi duong dan

// function return Promise
function myWriteFile() {
    return new Promise ((resolve, reject) => {
        fs.writeFile(addressSaved, data, function(err) {
            if (err) {
              return reject(err);
            }
            return resolve('The file saved!');
        });
    })
};

// async go to with await, async return Promise
async function asychWriteFile() {
    try {
        const myData = await myWriteFile();
        console.log(myData);
    } catch(e) {
        console.error(e);    
    }
};

asychWriteFile();