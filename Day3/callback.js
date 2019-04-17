function doTestOne(callback) {
    console.log('Start testing');
    setTimeout(function() {
        console.log('Done testing');
        return callback();
    }, 3000);
}

function showTestingStatus() {
    console.log('Finish test');
}

doTestOne(function() {
    showTestingStatus();
});

// tac vu I/O : WRITE/ READ FILE, DATABASE... : asynchronous ==> callback ==> stack

// read doccument Promise 

// fs : read file, write file : fs.writeFile(path, data, function(err, data) {}), 
// fs.readFile(path, function(err, data) {}), list product, list user


