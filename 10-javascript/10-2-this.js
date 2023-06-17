console.log(this)

function simpleFunc() {
    console.log(this)
}

simpleFunc();
console.clear()

class Counter  {
    count = 0;
    // bind를 사용하지 않고 arrow function을 사용하면 연결 가능!
    increase = function () {
        console.log(this)
    }
}
const counter = new Counter
console.log(counter)
counter.increase()
// const caller = counter.increase;
const caller = counter.increase.bind(counter)
caller();

class Bob {}
const bob = new Bob
bob.run = counter.increase;
bob.run()