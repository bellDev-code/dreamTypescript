{
    // Array
    const fruits: string[] = ['apple', 'banana']
    const scores: Array<number> = [1, 2, 3, 4]
    function printArray(fruits: readonly string[]) {} // => readonly 불변성 선언 시 배열 형태는 이런식으로 통일해주자
    // function printArray(fruits: readonly Array<number>) {} => 이런식으로 사용할 수 없다.

    // Tuple => 배열인데 서로 다른 타입을 가질 수 있다. 권장하지 않는다.
    // interface, type alias, class 사용 권장
    let student: [string, number];
    student = ['name', 123]
    student[0] // name
    student[1] // 123
    const [name, age] = student;
}