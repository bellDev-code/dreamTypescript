{
    // Type Alias
    type Text = string;
    const name: Text = 'lee';
    const address: Text = 'songheyonro'

    type Num = number;
    type Student = {
        name: string,
        age: number
    }
    const student: Student = {
        name: 'lee',
        age: 10,
    }

    // String literal Types
    type Name = 'name'
    let jongName:Name;
    jongName = 'name' // => 할당된 name만 사용할 수 있다.

    type JSON = 'josn'
    const json: JSON = 'josn' // => 위와 마찬가지로 할당된 josn만 사용가능!

    type Boal = true;
}