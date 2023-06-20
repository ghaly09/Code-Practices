/*
Diberikan sebuah function panggilAntrian yang menerima parameter line bertipe array. Function ini akan mengembalikan array yang dimana data array tersebut berkurang 1 didepannya
*/


function panggilAntrian(line){

    line.shift(line)
    return line
}

let line = ['Rhaegar', 'Snow']
console.log(panggilAntrian(line)) //output = snow