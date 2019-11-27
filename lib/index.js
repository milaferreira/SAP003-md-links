#!/usr/bin/env node


const fs = require ("fs");
const flagsFile = "README.md";
let array = [];

function mdLinks() {
    return new Promise((resolve, reject)=>{
    fs.readFile(flagsFile, 'utf8', (err, data)=>{
        if (err) {
            reject(err)
        }else{
            
            const regex = data.match(/\[(\S.*)\]\((http.*\)?)/gm);
            regex.forEach((i)=>{
                const title = i.match(/\[(\S.*)\]/);
                const href = i.match(/\((ht.*)\)/);
                array.push({title, href})
            })
            resolve(array)
        }
    })
})
}

module.exports = mdLinks;

