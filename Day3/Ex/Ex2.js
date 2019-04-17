var fs = require('fs');

// reaf file
const users = JSON.parse(fs.readFileSync('Day3/Ex/users.txt', 'utf8'));
const products = JSON.parse(fs.readFileSync('Day3/Ex/products.txt', 'utf8'));

// handle
let listUserWithProducts = (users, products) => {
    const listUser = [...users];
    let storedProduct = {};
    for (const itemProduct of products) {
        if (!storedProduct[itemProduct.userId]) {
            storedProduct[itemProduct.userId] = [];
        }
        storedProduct[itemProduct.userId].push(itemProduct);
    }

    for (const itemUser of listUser) {
        itemUser.product = storedProduct[itemUser.id];
    }
    return listUser;
};
const listResultUsers = listUserWithProducts(users, products);

// write File
fs.writeFile('Day3/Ex/resultEx2.json', JSON.stringify(listResultUsers, null, 4),function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("JSON saved resultEx2.json");
    }
});




