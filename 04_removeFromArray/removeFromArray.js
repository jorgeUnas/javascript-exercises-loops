const removeFromArray = function(myArray, ...elems) {
    for (elem of elems){
        for (let i = 0; i < myArray.length; i++){
            if (myArray[i] === elem){
                myArray.splice(i, 1);
            }else{
                continue;
            }
        }   
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
