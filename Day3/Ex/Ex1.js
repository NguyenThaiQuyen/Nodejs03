const fs = require('fs');
const path = require('path');

const addressSaved = path.resolve('../thumucngoai') ;  // check duong dan co loi ko chi duong dan
// read file 
const users = JSON.parse(fs.readFileSync('Day3/Ex/users.txt', 'utf8'));
const products = JSON.parse(fs.readFileSync('Day3/Ex/products.txt', 'utf8'));

// handle
let listProductWithtUser = (products, users) => {
    const listProduct = [...products];
    const listUser = [...users];
    let storedUser = {};
    const resultProduct = listProduct.map( itemProduct => {
        let copyProduct = {...itemProduct};
        if (!(storedUser[copyProduct.userId])) {
            // change property "userId" for product
            copyProduct.userId = listUser.find( itemUser => {
                if (itemUser.id === copyProduct.userId) {
                    storedUser[itemUser.id] = itemUser;
                    return itemUser.id === copyProduct.userId;
                };
            });
        } else { // if users is existed
            copyProduct.userId = storedUser[copyProduct.userId];
        }
        return copyProduct;
    });
    return resultProduct;
};

const listProducts = listProductWithtUser(products, users);

// write file
fs.writeFile('Day3/Ex/resultEx1.json', JSON.stringify(listProducts, null, 4), function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("JSON saved resultEx1.json");
    }
});




