{
    // 테니스 oop 구현
    type Game = {
        score: number;
    }

    class TennisGame {
        static winnerPoint: number = 15;
        static endScore: number = 40;
        score: number = 0

        constructor(score: number) {
            this.score = score
        }

        static playTennis(score: number): Game {
            return new TennisGame(score)
        }

        winnerPoint(score: number): Game {
            if(this.score > TennisGame.endScore) {
                console.log('게임 종료')
            }
            this.score += score + TennisGame.winnerPoint;
            return {
                score,
            }
        }
    }
}