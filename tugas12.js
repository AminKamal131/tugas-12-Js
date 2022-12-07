function kamal(){
    var buah = ["pisang","Jeruk","Apel","Mangga"];
    console.log(buah);

    buah.pop()
    // buah = buah.shift();
    
    
    console.log(buah)
    console.log(["Jeruk","Apel"])
    return buah

    var buah2 = buah.shift()
    console.log(buah2)
    return buah

}
kamal()
