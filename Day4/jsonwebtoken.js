const { generateSignature } = require('./myModule/jwt-helper.js');

const myObj = {
    name : 'quyen',
    age : 21,
    email : 'thai.quyen012@gmail.com'
}

async function asychGenerateSignature(obj, key) {
    try {
        const myData = await generateSignature(obj, key);
        console.log(myData);
    } catch(e) {
        console.error(e);    
    }
};

asychGenerateSignature(myObj, "the key");
