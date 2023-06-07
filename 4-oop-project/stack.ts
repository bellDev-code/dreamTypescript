// 언어 자체에서 제공하는 자료구조 사용 x
// 단일 연결 리스트

interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}

    push(value: string): void {
        if(this.size === this.capacity) {
            throw new Error('Stack is Full!!!')
        }
        // 새로 들어온 node가 head를 가리킨다.
        const node: StackNode = { value, next: this.head }
        this.head = node;
        this.size++;
    }

    pop(): string {
        if(this.head == null) {
            throw new Error('Stack is empty!!!')
        }
        const node = this.head
        this.head = node?.next;
        this.size--;

        return ''
    }
}

const stack = new StackImpl(2)

stack.push('google')
console.log(stack)
stack.push('kakao')
console.log(stack)
console.log('---------')
stack.pop()
console.log(stack)