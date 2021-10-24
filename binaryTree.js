const binaryTree = (v) => {
    let answer;
    const DFS = (v) => {
        if (v > 7) {
            return false;
        } else {
            DFS(v*2);
            DFS(v*2+1);
            console.log(v);
        }
    }
    DFS(v);
    console.log(answer);
}
binaryTree(1);