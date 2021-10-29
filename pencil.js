const pencil = (student) => {
    const DAS = 12;
    let pencilNum = student % DAS == 0 ? (student - student % DAS) / DAS : (student - student % DAS) / DAS + 1;
    console.log(Math.ceil(student/DAS));
    console.log(pencilNum);
}
pencil(24);