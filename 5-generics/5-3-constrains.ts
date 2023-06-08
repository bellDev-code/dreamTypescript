interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log('Full Time!!!')
    }
    workFullTime() {}
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log('Part Time!!!')
    }
    workPartTime() {}
}

// payBad : 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 리턴하는 함수는 쓰레기
function payBad(employee: Employee): Employee {
    employee.pay()
    return employee;
}

// generic을 사용할 수 있다.
function pay<T extends Employee>(employee: T): T {
    employee.pay()
    return employee;
}

const jongho = new FullTimeEmployee();
const lee = new PartTimeEmployee();
jongho.workFullTime();
lee.workPartTime();

// 세부적인 함수를 사용할 수 없다.
// jonghoAfterPay.pay() 뿐
// const jonghoAfterPay = payBad(jongho)
// const leeAfterPay = payBad(lee)

// generic 함수를 사용하여 
const jonghoAfterPay = pay(jongho)
const leeAfterPay = pay(lee)
jonghoAfterPay.workFullTime();
lee.workPartTime();

const obj = {
    name: 'lee',
    age: 28,
}

const obj2 = {
    animal: 'dog'
}

function getValue<T, K extends keyof T>(obj: T, key: K):T[K] {
    return obj[key]
}

console.log(getValue(obj, 'name')) // 'lee'
console.log(getValue(obj, 'age')) // 20
console.log(getValue(obj2, 'animal')) // 'dog'

