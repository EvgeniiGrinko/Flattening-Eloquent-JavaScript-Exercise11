function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
    current = combine(current, element);
    }
    return current;
    }
    console.log(reduce([[1, 2, 3, 4],[6,8,2,1],[0,1,2,5,8,5,32,0]], (a, b) => a.concat(b), []));
