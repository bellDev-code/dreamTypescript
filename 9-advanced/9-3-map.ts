{
    type Video = {
        title: string;
        author: string;
    }

    // [1, 2].map(item => item * item) // [1, 4]
    type Optional<T> = {
        [P in keyof T]?: T[P] // for...in
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }

    type VideoOptinal = Optional<Video>

    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'dog'
    }

    const video: ReadOnly<Video> = {
        title: 'lee',
        author: 'jongho'
    }
    // 수정할 수 없다.
    // video.title = 'ho'

    // type VideoOptinal = {
    //     title?: string;
    //     author?: string;
    // }

    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    // }

    // 예제
    type Nullable<T> = { [P in keyof T]: T[P] | null }
    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }
}