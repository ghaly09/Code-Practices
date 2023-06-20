function processSentence(name, age, address, hobby) {
    return (`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`)
   }
   
   // do not change this code
   var fs = require("fs");
   var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
   var a = input[0];
   var b = parseInt(input[1]);
   var c = input[2];
   var d = input[3];
   
   var fullSentence = processSentence(a, b, c, d);
   console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"