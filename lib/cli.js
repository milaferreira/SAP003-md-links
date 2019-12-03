#!/usr/bin/env node

const mdLinks = require('./index.js')
const file = process.argv[2];

mdLinks(file)
.then((result)=> {
    result.forEach(element => {
        console.log(element.href, element.title);      
    });
})

.catch((error) => console.log(error))