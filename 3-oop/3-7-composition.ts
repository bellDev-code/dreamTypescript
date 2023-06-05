{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning the machine...')
        }
        
        private grindBeans(shots: number) {
            console.log(`Grinding beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not Enough coffee Beans!!')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
        }
        private preheat(): void {
            console.log('heating up...')
        }
        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots ...`)
            return {
                shots,
                hasMilk: false
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('Steaming Milk...')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }
    
    // 설탕 제조기
    class AutomaticSugerMixer {
        private getSuger() {
            console.log('Getting some sugar from candy')
            return true;
        }
        
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSuger()
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string, private milkFother: CheapMilkSteamer) {
            super(beans)
        }
        private steamMilk(): void {
            console.log('Steaming some milk...')
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.milkFother.makeMilk(coffee)
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans: number, private sugar: AutomaticSugerMixer) {
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.sugar.addSugar(coffee)
        }
    }

    // Classes can only extend a single class.
    // class SweetCafeLatte extends SweetCoffeeMaker,SweetCafeLatte {}

    class SweetCafeLatteMachine extends CoffeeMachine {
        constructor(private beans: number, private sugar: AutomaticSugerMixer, private milk: CheapMilkSteamer) {
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const addSugar = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(addSugar)
        } 
    }

}