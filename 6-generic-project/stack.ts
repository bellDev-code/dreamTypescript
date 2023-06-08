// generic으로 stack을 구현해보자.
// 현재는 string만 받는 stack

interface GenericStack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
}

type GenericStackNode<T> = {
    readonly value: T;
    readonly next?: GenericStackNode<T>;
}

class GenericStackImpl<T> implements GenericStack<T> {
    private _size: number = 0;
    private head?: GenericStackNode<T>

    constructor(private capacity: number) {}

    get size() {
        return this._size
    }

    push(value: T) {
        if(this.size === this.capacity) {
            throw new Error('Stack is full!!!')
        }
        const node: GenericStackNode<T> = { value, next: this.head }
        this.head = node;
        this._size++;
    }

    pop():T {
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

const genericStack = new GenericStackImpl<string>(10)
genericStack.push('youngdo 1')
genericStack.push('blanc 2')
genericStack.push('cozel 3')
while(genericStack.size !== 0) {
    console.log(genericStack.pop())
}

const stack2 = new GenericStackImpl<number>(10)
stack2.push(123)
stack2.push(456)
stack2.push(789)
while(stack2.size !== 0) {
    console.log(stack2.pop())
}
