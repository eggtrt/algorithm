const odd = (array) => {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
            sum += array[i];
            min = array[i] > min ? min : array[i];
        }
    }
    console.log('합: ', sum);
    console.log("최소값: ", min);
}

odd([12, 77,38, 41,53,92,85]);