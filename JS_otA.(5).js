function getWordStructure(w){

    let glas = ["A", "E", "I", "O", "U", "Y"]
    let arr = [...w.toUpperCase()]
    let sogl_num = arr.length;
    let glas_num = 0;
    for (i = 0; i < arr.length; i++){
            for(j = 0; j < glas.length; j++){
                if(arr[i] == glas[j]){
                    glas_num++
                    sogl_num--
                }
            }
        if(arr[i].toUpperCase() == arr[i].toLowerCase()){
            console.log(arr[i] )
            sogl_num--
        }
    }
 console.log("Cлово " + w + " содержит "  + sogl_num + "-согласных, " + glas_num + "-гласных")   
}
getWordStructure("case")  