const fs = require('fs');

// fs.writeFile('sample.txt', 'Hey there !! I am using node.js', (err, res) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('written');
//     }
// })

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})