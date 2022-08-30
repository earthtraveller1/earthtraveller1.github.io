"use strict";
let justNoText = document.getElementById('justNoText');
console.log('h');
setTimeout((element) => {
    if (element != null) {
        console.log('bozo');
        element.innerText = 'Just no...';
    }
}, 2500, justNoText);
