const subset = (n) => {
    let answer;
    let ch = Array.from({ length: n+1 }, () => 0);
    const DFS = (l) => {
        if (l === n+1) {
            let tmp = "";
            for (let i = 0; i <= n; i++) {
                if (ch[i] === 1) {
                    tmp+=i + " ";
                }
            }
            console.log(tmp);
        } else {
            ch[l]=1;
            DFS(l+1);
            ch[l]=0;
            DFS(l+1);
        }
    }
    DFS(1);
}
subset(3);