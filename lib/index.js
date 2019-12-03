const fs = require ("fs");
let array = [];

function mdLinks(file) {
    return new Promise((resolve, reject)=>{
    fs.readFile(file, 'utf8', (err, data)=>{
        if (err) {
            reject(err.message)
        }else{
            
            const regex = data.match(/\[(\S.*)\]\((https?.*?\))/gm);
            regex.forEach((i)=>{
                const title = i.match(/\[(\S.*)\]/)[1];
                const href = i.match(/\((https?.*?\))/)[1];
                array.push({href, title})
            })
            resolve(array)
        }
    })
})
}

module.exports = mdLinks;

