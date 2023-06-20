/*
Nama function haruslah antrian, panggilAntrian, tumpukan dan ganjilGenap sedangkann variabel yang sudah disediakan yaitu line. Function dan variabel yang tersebut tidak boleh diganti dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Directions yang disebutkan di bawah

antrian
Diberikan sebuah function antrian yang menerima dua parameter yaitu line bertipe array dan person bertipe string. Function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah diakhir array sesuai dengan parameter person.
*/


function antrian(line, person){

    line.push(person)
    return line

}

let line = ['raeghar']
console.log(antrian(line, 'snow'))
