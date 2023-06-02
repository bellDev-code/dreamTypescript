{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }
    
        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enogh coffeeBeans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
            return {
                shots,
                hasMilk: false
            }
        }
    }


    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32)

    // Encapsulation 안했을 시 외부에서 접근 가능
    // maker.BEANS_GRAMM_PER_SHOT = 30;
    // maker.coffeeBeans = 3;


    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            this.internalAge = num;
        }

        // 하나하나 선언하지 않아도 밑의 방식으로 선언하면 코드도 깔끔
        constructor(private firstName: string, private lastName: string) {}
    }
    const user = new User('steve', 'jobs')
    console.log(user.fullName)
    // get을 사용하지 않았을 시 firstName 변경 시 적용되지 않는다.
    // user.firstName = 'lee'

    user.age = 6;
}