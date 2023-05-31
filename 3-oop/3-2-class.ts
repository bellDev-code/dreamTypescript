{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0; // instance level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
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

    const maker = new CoffeeMaker(32);
    console.log(maker)
    const maker2 = CoffeeMaker.makeMachine(10);
    console.log(maker2)
}