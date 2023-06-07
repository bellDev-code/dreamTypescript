// 단일 연결 리스트에는 head라는 것이 존재
// head가 가리키고 있는 head가 할당된 item을 하나하나 찾는다.
// string이라는 value를 전달한다면, 이 자체를 저장하는 것이 아닌, 한단계 감쌀 수 있는 node(데이터를 담고 있음)를 만들어서
// head가 새로 만들어진 node를 가리키고, 또 이전에 node가 가리키는 것을 찾는다.

interface AnswerStack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type AnswerStackNode = {
    readonly value: string;
    readonly next?: AnswerStackNode;
}

class AnswerStackImpl implements AnswerStack {
    private _size: number = 0;
    private head?: AnswerStackNode

    constructor(private capacity: number) {}

    get size() {
        return this._size
    }

    push(value: string) {
        if(this.size === this.capacity) {
            throw new Error('Stack is full!!!')
        }
        const node: AnswerStackNode = { value, next: this.head }
        this.head = node;
        this._size++;
    }

    pop():string {
        // null == undefined, null !== undefined
        if(this.head == null) {
            throw new Error('Stack is empty!!!')
        }
        const node = this.head;
        this.head = node.next
        this._size--;

        return node.value
    }
}

const answerStack = new AnswerStackImpl(10)
answerStack.push('youngdo 1')
answerStack.push('blanc 2')
answerStack.push('cozel 3')
while(answerStack.size !== 0) {
    console.log(answerStack.pop())
}
