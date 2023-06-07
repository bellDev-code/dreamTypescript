type Game = {
    point: number;
    result: boolean;
}

interface GameStart {
    playTennis(point: number): Game
}

class PlayTennis implements GameStart {
    private score: number = 0;
    
    constructor(score: number) {
        this.score = score
    }

    static playGame(score: number) {
        return new PlayTennis(score);
    }

    winnerPoint(): Game {
        this.score += 15;

        if (this.score > 40) {
            this.score = 40;
            return {
                point: this.score,
                result: true
            }
        } else {
            return {
                point: this.score,
                result: false
            }
        }
    }

    playTennis(point: number) {
        const winner = this.winnerPoint()
        return {
            point: winner.point,
            result: winner.result
        }
    }
}

const tennis = new PlayTennis(0);
console.log(tennis.playTennis(0));
console.log(tennis.playTennis(0));
console.log(tennis.playTennis(0));
