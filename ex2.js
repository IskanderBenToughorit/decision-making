// Isolating the First Element
/*function RankLastPositfFirstElement(E, index ) {
    // Base case: if we have traversed the entire list
    if (index === E.length) {
        return -1;
    }

    
    const rank = RankLastPositfLastElement(E, index + 1);

    
    if (rank === -1 && E[index] > 0) {
        return index;
    }
    return rank;
}

// Example usage

console.log(RankLastPositfLastElement([1 , 28, -2, 5, 4, -9, 0, 8, -2, 0],0)); // Output: 7
console.log(RankLastPositfLastElement([1 , -4, -2, -5, -4, -9, 0, -8, -2, 0],0)); // Output 0
console.log(RankLastPositfLastElement([-1 , -4, -2, -5, -4, -9, 0, -8, -2, 10],0)); // Output 9
console.log(RankLastPositfLastElement([-1 , -4, -2, -5, -4, -9, 0, -8, -2, 0],0)); // Output -1
*/


// Isolating the Last Element

function RankLastPositfLastElement(E, index) {
    if (index < 0) {
        return -1;
    }

    if (E[index] > 0) {
        return index;
    }

    return RankLastPositfLastElement(E, index - 1);
}

// Example usage

console.log(RankLastPositfLastElement(E=[1, 4, -2, 5, 4, -9, 0, 8, -2, 0], E.length - 1)); // Output: 7
console.log(RankLastPositfLastElement(E=[1, -4, -2, -5, -4, -9, 0, -8, -2, 0], E.length - 1)); // Output: 0
console.log(RankLastPositfLastElement(E=[-1, -4, -2, -5, -4, -9, 0, -8, -2, 10], E.length - 1)); // Output: 9
console.log(RankLastPositfLastElement(E=[-1, -4, -2, -5, -4, -9, 0, -8, -2, 0], E.length - 1)); // Output: -1
console.log(RankLastPositfLastElement(E=[], E.length - 1)); // Output: -1
