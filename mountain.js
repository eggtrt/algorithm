const mountain = (array) => {
    let count = 0;
    for (let i = 1; i < array.length-1; i++) {
        for (let j = 1; j < array.length-1; j++) {
            if (array[i][j] > Math.max(array[i-1][j], array[i+1][j], array[i][j-1], array[i][j+1])) {
                count++;
            }
        }
    }
    console.log(count);
}

mountain([[]])