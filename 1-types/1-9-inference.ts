// type inference

let text = 'hello';
// function print(message: string) {
//     console.log(message)
// }
function print(message: 'hello') {
    console.log(message)
}

// 타입 추론
function add(x: number, y: number): number {
    return x + y;
}

// 타입 추론의 추론 예시 => 별로 좋지 않다.
const result = add(1, 2)