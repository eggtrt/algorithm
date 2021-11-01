const sliding = (k, array) => {
    let answer, sum =0;
    for (let i=0; i<k; i++) {
        sum+=array[i];
    }
    answer=sum;
    for (let i=k; i < array.length; i++) {
        sum+=(array[i]-array[i-k]);
        answer=Math.max(answer,sum);
    }
}