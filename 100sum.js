const sum = (array) => {
    let total = array.reduce((a, b) => a + b, 0);
    // for (let i = 0; i < array.length; i++) {
    //     total += array[i];
    // }
    let difference = total - 100;
    for (let j = 0; j < array.length; j++) {
        for (let k = array.length - 1; k > j; k--) {
            if (array[j] + array[k] == difference) {
                array.splice(j, 1);
                array.splice(k-1, 1);
            }
        }
    }
    console.log(array);
}

sum([20,7,23,19,10,15,25,8,13]);