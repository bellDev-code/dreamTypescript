{
    // Union Type: OR
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction)
    }
    move('down')

    type TileSize = 4 | 8 | 12 | 16;
    // const tile: TileSize = 3; => 위의 TileSize에는 3이라는 정수는 할당되지 않아서 에러 발생
    const tile: TileSize = 8;

    
    // function login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    
    type FaileState = {
        reason: string;
    }

    type LoginState = SuccessState | FaileState

    function login(): LoginState {
        return {
            response: {
                body: 'LoggedIn!!' 
            }
        }
    }

    // practice
    // PrintLoginState(state: LoginState)
    // success -> response의 body에 '성공'
    // fail -> reason에다가 '실패'

    function printLoginState(state: LoginState) {
        if('response' in state) {
            console.log(`${state.response}`)
        } else {
            console.log(`${state.reason}`)
        }
    }
}