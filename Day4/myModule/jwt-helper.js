const jwt = require('jsonwebtoken');

function generateSignature(object, key) {
    return new Promise((resolve, reject) => {
        jwt.sign(object, key, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    })
};

module.exports = {
    generateSignature : generateSignature
}