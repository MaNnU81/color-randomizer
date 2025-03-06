

//rgbString, hex, array, object

function randomColorArray() {
   
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b= Math.round(Math.random() * 255);
 
    return [r, g, b]
}

function randomColorHex() {
    // let letters = '0123456789ABCDEF';
    // let color = '#'

    // for (let i = 0; i < 6; i++) {
    //    color += letters[Math.floor(Math.random() * 16)]
        
    // }
    // return color
}

function randomColorObj() {
    
}

console.log(randomColorArray());
console.log(randomColorHex());
// console.log(randomColorRgb());
// console.log(randomColorObj());
