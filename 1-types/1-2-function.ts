{
    // // javascript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // typescript
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // javascript
    // function jsfetchNum(id) {
    //     // ...code
    //     // ...code
    //     return new Promise((resolve, reject) => {
    //         resolve(100)
    //     })
    // }

    // // typescript
    // function fetchNum(id: string): Promise<number> {
    //     // ...code
    //     // ...code
    //     return new Promise((resolve, reject) => {
    //         resolve(100)
    //     })
    // }

    // javascript => typescript
    // Optional Parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName)
        console.log(lastName)
    }
    printName('lee', 'jongho')
    printName('jongho')
    printName('jongho')

    // Default Parameter
    function printMessage(message: string = 'default message!!!') {
        console.log(message)
    }
    printMessage();

    // Rest Parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b)
    }

    console.log(addNumbers(1,2))
    console.log(addNumbers(1,2,3,4))

}