const two = (m, array) => {
    let lt, sum = 0;
    let answer = 0;
    for (let rt = 0; rt < array.length; rt++) {
        sum+=array[rt++];
        while (sum > m) {
            sum-=array[lt++];
        }
        answer+=rt-lt+1;
    }
}