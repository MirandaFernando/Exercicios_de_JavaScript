function sort2number(array){
    for(index1=0; index1<array.length; ++index1){
        for(index2=0; index2<array.length; ++index2){
            if(array[index1]<array[index2]){
                let x = array[index1];
                console.log(x)
                array[index1] = array[index2];
                array[index2] = x;
            }
        }
    }
     return array;
}

array = sort2number([3,2,1]);
console.log(array);