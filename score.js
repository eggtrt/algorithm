const score = (array) => {
    let add = 0;
    let total = 0;
    for (let i in array) {
        if (i > 0 && array[i-1] == array[i] == 1) {
            add++;
        }
        total += array[i];
    }
    total += add;
    console.log(total);
}

score([1,0,1,1,1,0,0,1,1,0]);