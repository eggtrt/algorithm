const grade = (array) => {
    let gradeArray = [];
    for (let i = 0; i < array.length; i++) {
        let grade = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                grade++;
            }
        }
        gradeArray[i] = grade + 1;
    }
    console.log(gradeArray);
}

grade([87, 89, 92, 100, 76]);