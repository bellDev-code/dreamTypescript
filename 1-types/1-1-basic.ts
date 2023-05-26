{
    // javascript
    // Primitive: number, string, boolean, bigint, symbol, undefiend, null
    // Object: function, array...

    // number
    const num: number = 10;

    // string
    const str: string = 'lee';

    // boolean
    const boal: boolean = true;

    // undefined
    let name: undefined; // no
    let age: number | undefined; // => 보편적으로 null 보다는 undefined를 많이 쓴다.
    
    age = undefined;
    age = 10;

    function find():number | undefined {
        return undefined;
    }

    // null
    let person: null; // no
    let person2: string | null;

    // unknown => 쓸 이유가 없다.
    let notSure: unknown;
    notSure = 10;
    notSure = 'unkwnon!'

    // any => 쓸 이유가 없다.
    let anyting: any;
    anyting = 10;
    anyting = false;

    // void => 함수에서 아무것도 return 하지 않을때
    function print(): void {
        console.log('hello')
        return;
    }

    let unusable: void = undefined; // 이렇게 쓰지 않는다.

    // never
    // 명시되어 있으면 절대 return 할 수 없다.
    function throwError(message: string): never {
        // message => server (log)
        throw new Error(message)
        while(true) {

        }
    }

    // object
    let obj:object; // 구제적으로 명시해야한다. 그러므로 이런식으로 표현하지 않는다.
    function objFunc(obj: object) {}
    objFunc({name: 'lee'})
    objFunc({age: 10})
}