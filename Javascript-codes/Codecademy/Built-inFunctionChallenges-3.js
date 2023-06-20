/*
Diberikan sebuah function tumpukan yang menerima dua parameter line bertipe array dan title bertipe string. Function ini akan mengembalikan array yang dimana data array sudah bertambah diawal array sesuai dengan parameter title.
*/

function tumpukan(line, title){

    line.unshift(title)
    return line
}

let line = ['snow'];
console.log(tumpukan(line, 'jon')) // ['jon', 'snow']