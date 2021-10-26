const highScore = (limit, score, spentTime) => {
    let answer = 0;
    let n = score.length;
    const DFS = (l, sum, time) => {
        if (time > limit) return;
        if (l === n) {
            sum > answer ? answer = sum : "";
        } else {
            DFS(l+1, sum + score[l], time + spentTime[l]);
            DFS(l+1, sum, time);
        }
    }
    DFS(0, 0, 0);
    console.log(answer);
}
highScore(20,[10, 25, 15, 6, 7], [5, 12, 8, 3, 4]);