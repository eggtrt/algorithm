const dogTruck = (max, array) => {
    let answer = 0;
    let n = array.length;
    const DFS = (l, sum) => {
        if (sum > max) return;
        if (l === n) {
            sum > answer ? answer = sum : "";
        } else {
            DFS(l+1, sum + array[l]);
            DFS(l+1, sum);
        }
    }
    DFS(0, 0);
    console.log(answer);
}
dogTruck(259, [81, 58, 42, 33, 61]);