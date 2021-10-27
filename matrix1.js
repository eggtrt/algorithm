const matrix = (array) => {
    let answer = Number.MIN_SAFE_INTEGER;
    let sum1, sum2, sum3=0, sum4=0;
    for (let i = 0; i < array.length; i++) {
        sum1=sum2=0;
        for (let j = 0; j < array.length; j++) {
            sum1 += array[i][j];
            sum2 += array[j][i];
        }
        sum3 += array[i][i];
        sum4 += array[i][array.length-i-1];
    }
    console.log(sum3);
    answer = Math.max(sum1,sum2,sum3, sum4);
    console.log(answer);
}
matrix([[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50 ,53 ,15],
[19, 27 ,29, 37, 27],
[19, 13, 30 ,13 ,19]])