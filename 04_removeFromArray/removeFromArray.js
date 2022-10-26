const removeFromArray = function(array, ...toBeRemoved) {
   
    for (i = 0; i < toBeRemoved.length; i++) {
        
        for (j = 0; j< array.length; j++) {
            
            if (array[j] === toBeRemoved[i]) {
                array.splice(j, 1);
               
            }
            else {
                
            }
        }
    }
   
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
