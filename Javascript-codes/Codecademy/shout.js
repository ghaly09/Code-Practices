//TUGAS 1
//===========================================

function shoutout(){
    return "Hallo Function!"
}

console.log(shoutout())

//TUGAS 2
//===========================================

function calculateMultiply(num1, num2){
    return (num1*num2)
       
}
    var num1 = 5
    var num2 = 6
    var hasilPerkalian = calculateMultiply(num1,num2)

    console.log(hasilPerkalian)

//TUGAS 3
//===========================================

function proccessentence(){
    return (`Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobbu yaitu ${hobby}`)
}
    var name = "agus"
    var age = 30
    var address = "Jln. Malioboro, Yogyakarta"
    var hobby = "gaming"
    var fullSentence = proccessentence (name, age, address, hobby)
    
    console.log(fullSentence)