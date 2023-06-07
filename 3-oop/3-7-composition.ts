{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // interface를 활용하여 CoffeeMachine 하나로 다른 모든 것을 만들 수 있음.
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
            this.coffeeBeans = coffeeBeans
        }

        // static makeMachine(coffeeBeans: number): CoffeeMachine {
        //     return new CoffeeMachine(coffeeBeans)
        // }

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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.makeMilk(sugarAdded)
        }
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 우유 거품기
    class CheapMilkSteamer implements MilkFrother {
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

    class FancyMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Fancy Steaming Milk...')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Cold Steaming Milk...')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }
    
    // 설탕 제조기
    class CandySugarMixer implements SugarProvider {
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

    class SugarMixer implements SugarProvider {
        private getSuger() {
            console.log('Getting some sugar from jar!!!!')
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

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // class CafeLatteMachine extends CoffeeMachine {
    //     constructor(beans: number, public readonly serialNumber: string, private milkFother: MilkFrother) {
    //         super(beans)
    //     }
    //     private steamMilk(): void {
    //         console.log('Steaming some milk...')
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots)
    //         return this.milkFother.makeMilk(coffee)
    //     }
    // }

    // class SweetCoffeeMaker extends CoffeeMachine {
    //     constructor(private beans: number, private sugar: SugarProvider) {
    //         super(beans)
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots)
    //         return this.sugar.addSugar(coffee)
    //     }
    // }

    // Classes can only extend a single class.
    // class SweetCafeLatte extends SweetCoffeeMaker,SweetCafeLatte {}

    // class SweetCafeLatteMachine extends CoffeeMachine {
    //     constructor(private beans: number, private milk: MilkFrother, private sugar: SugarProvider) {
    //         super(beans)
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         const addSugar = this.sugar.addSugar(coffee);
    //         return this.milk.makeMilk(addSugar)
    //     } 
    // }

    // mlik
    const cheapMilkMaker = new CheapMilkSteamer()
    const fancyMilkMaker = new FancyMilkSteamer()
    const coldMilkMaker = new ColdMilkSteamer()
    const noMilk = new NoMilk();

    // sugar
    const candySuger = new CandySugarMixer()
    const sugar = new SugarMixer()
    const noSugar = new NoSugar();

    /// machine
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySuger)
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar)

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar)
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar)

    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySuger)
}