const minArray = (array) => {
    if (!Array.isArray(array)) {
        console.log("배열을 입력해주세요!");
        return false;
    } else if (array.length == 0) {
        console.log("배열 안에 값을 입력해주세요");
        return false;
    }
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            console.log("모든 값은 숫자여야합니다");
            return false;
        }
        min = min > array[i] ? array[i] : min;
    }
    console.log(min);
}

minArray([5,7,10,3,2,9,"11"]);