const matrix = (n, array) => {
    let answer = 0;
    let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0));
    let ch = Array.from({ length: n+1 }, () => 0);
    for (let [a,b] of array) {
        graph[a][b] =1;
    }
    const DFS = (l) => {
        if (l==n) answer++;
        else {
            for (let i=1; i <= n; i++) {
                if (graph[l][i] == 1 && ch[i]==0) {
                    ch[i] = 1;
                    DFS(i);
                    ch[i] = 0;
                }
            }
        }
    }
    ch[1] = 1;
    DFS(1);
}

const matrix2 = (n, array) => {
    let answer = 0;
    let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0));
    let ch = Array.from({ length: n+1 }, ()=>0);
    for (let [a,b] of array) {
        graph[a].push(b);
    }
    const DFS = (v) => {
        if (v==n) answer++;
        else {
            for (let i=0; i < graph[v].length; i++) {
                if (ch[graph[v][i]] == 0) {
                    ch[graph[v][i]] = 1;
                    DFS(graph[v][i]);
                    ch[graph[v][i]] = 0;
                }
            }
        }
    }
}