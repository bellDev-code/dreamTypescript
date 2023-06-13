{
    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'femail'
    }

    type Name = Animal['name'] // string
    const text: Name = 'hello'

    type Gender = Animal['gender'] // 'male' | 'female'

    type Keys = keyof Animal;
    const key: Keys = 'gender'

    type Person = {
        name: string;
        gender: Animal['gender']
    }

    const person: Person = {
        name: 'jongho',
        gender: 'male'
    }
}
