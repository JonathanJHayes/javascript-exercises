const sumAll = function(numStart, numEnd) {
    
    if ( numStart > 0 && numEnd > 0 
        && Number.isInteger(numStart) && Number.isInteger(numEnd)) {
        if ( numStart < numEnd) {

        numSum = 1;
        for ( i = numStart; i < numEnd; i++) {
            numSum = numSum + i + 1;  }
        return numSum;
        }

        else if (numStart > numEnd) {
            numSum = 1;
            for (i = numEnd; i < numStart; i++) {
                numSum = numSum + i + 1;
            }
            return numSum;
        }
    }

    else {
        return "ERROR";

    }
};

// Do not edit below this line
module.exports = sumAll;
