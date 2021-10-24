const binary = (n) => {
    let answer="";
    const DFS = (l) => {
        if (l == 0) return false;
        DFS(Math.floor(l/2));
        answer+=(l%2);
    }
    DFS(n);
   return answer;
}
binary(11);