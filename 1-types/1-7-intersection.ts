{
    // intersaction types: &

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        empolyeeId: number;
        work: () => void
    }

    function interWork(person: Student & Worker) {
        console.log(person.name, person.score, person.empolyeeId, person.work())
    }

    interWork({
        name: "lee",
        score: 10,
        empolyeeId: 123,
        work: () => {}
    })

}