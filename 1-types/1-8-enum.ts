{
    // javascript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNEDAY = 2;
    const DAY_ENUM = Object.freeze({"MONDAY": 1, "TUESDAY": 2, "WEDNEDAY": 2});
    const dayOfToday = DAY_ENUM.MONDAY;

    console.log(dayOfToday)

    // typescript Enum
    // 가능한한 쓰지 않는것을 추천
    type DayOfWeek = 'Mon' | 'Tue' | 'Wed'; // Union type을 사용하자
    enum Days {
        // 지정하지 않으면 number 0부터 
        // string은 전부 넣어줘야함
        Monday,
        Tuesday,
        Wednesday,
        Friday,
        Satarday,
        Sunday
    }
    console.log(Days.Monday)
    
    let day: Days = Days.Tuesday;
    day = Days.Satarday;

    let date: DayOfWeek = 'Mon'
    date = 'Tue'
    // date = 'lee'
}