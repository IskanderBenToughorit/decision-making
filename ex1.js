function findElementInRange(A, a, b) {
    let left = 0, right = A.length - 1;
    

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (A[mid] < a) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left < A.length && A[left] <= b) {
        return `A[${left}]=${A[left]}`;
    }

    return `aucun élément trouver dans l'interval [${a},${b}]`;
}

// Example usage
const A = [3, 7, 8, 43, 556];
console.log(findElementInRange(A, 40, 50)); // Output: 43
console.log(findElementInRange(A, 40, 42)); //Aucun élément ne correspond à l'intervalle donné.
