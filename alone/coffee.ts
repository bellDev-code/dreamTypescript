{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM: number = 10;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number) {
            return new CoffeeMachine(coffeeBeans)
        }

        private grindBeans(shots: number) {
            console.log(`Grinding beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM) {
                throw new Error('Not Enough coffee Beans!!')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM
        }

        private preheat(): void {
            console.log('heating Machine...')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`)
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.preheat()
            return this.extract(shots)
        } 
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(10)
    console.log(maker)
    // maker.makeCoffee(10)
}