const repeatString = function(string,num) {
 
    newString = "";
 
    if (num === 0) {

    }
    else if ( num < 0) {
        newString = "ERROR";
    }
    else {
        for (i = 1; i<= num; i++) {
            newString = newString + string;
        }
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
