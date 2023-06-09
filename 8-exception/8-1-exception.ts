// Java: Exception
// Javascript: Error
{
    // const array = new Array(10000000000000000);

    // const position = {
    //     x: 0,
    //     y: 0
    // }
    // type Moving = 'up' | 'down' | 'left' | 'right' | 'he'; 

    // function move(str: Moving) {
    //     switch(str) {
    //         case 'up':
    //             return position.y += 1
    //             break;
    //         case 'down':
    //             return position.y -= 1
    //         break;
    //         case 'left':
    //             return position.x -= 1
    //         break;
    //         case 'right':
    //             return position.x += 1
    //         break;
    //         default: 
    //         const invalid: never = str
    //         throw new Error(`no position ${invalid}`)
    //     }
    // }

    // Error(Exception) Handling : try -> catch -> finally

    function readFile(fileName: string): string {
        if(fileName === 'Not exist') {
            throw new Error(`File Not Exist ${fileName}`)
        }
        return 'file contents'
    }

    function closeFile(fileName: string) {
        // 
    }

    function run() {
        const fileName = 'Not exist'
        try {
            console.log(readFile(fileName))
        } catch (error) {
            console.log(`Catched!!!`)
            return;
        } finally {
            closeFile(fileName)
            console.log(`finally!!!`)
        }
        // closeFile(fileName)
        // console.log(`finally!!!`)
    }
    run()
}