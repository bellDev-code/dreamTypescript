// 매개변수 타입 표기
function greet(name: string) {
    console.log('Hello, ' + name.toUpperCase() + '!!')
}

// Argument of type 'number' is not assignable to parameter of type 'string'.
// greet(12);

// 반환 타입 표기
function getFavoriteNumber(): number {
    return 12
}

// 객체 타입
function printCoord(pt: { x: number, y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 12, y: 10})

// Optional Property