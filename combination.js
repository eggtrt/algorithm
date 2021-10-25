const combination = (n, m) => {
    let answer;
    let tmp = Array.from({ length: m }, () => 0);
    const DFS = (l, num) => {
        if (l == m) {

        } else {
            for (let i = num; i < n; i++) {
                tmp[l] = i;
                DFS(l+1, i+1);
            }
        }
    }
} 