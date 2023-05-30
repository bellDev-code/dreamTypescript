{
    // Type Assertions
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length)
    console.log((<string>result).length)

    // const wrong: any = 5;
    // console.log((wrong as Array<number>).push(1)) => 극혐

    function findNum(): number[] | undefined {
        return undefined
    }

    // const numbers = findNum()!;
    // numbers.push(2) => 극혐

    // const button = document.querySelector('class')!
    // button.nodeValue
}