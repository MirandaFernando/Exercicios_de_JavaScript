
function sort2number(array){

    for(index=0; index<array.length-1; ++index){
        if(array[0] < array[1]){
            return array;
        }
        else{
            let x = array[0]
            array[0] = array[1];
            array[1] = x;

            return array;
        }    
    }
}

array = sort2number([2,1]);
console.log(array)