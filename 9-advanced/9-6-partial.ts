{
    type ToDo = {
        title: string;
        description: string;
        lable: string;
        priorty: 'high' | 'low'
    }

    function updateTodo(todo: ToDo, fieldsTodoUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsTodoUpdate}
    }

    const todo: ToDo = {
        title: 'lean Typescript!',
        description: 'study hard',
        lable: 'study',
        priorty: 'high'
    }

    const updated = updateTodo(todo, {priorty: 'low'})
    console.log(updated)
}