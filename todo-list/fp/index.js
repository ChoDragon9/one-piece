class TodoList {
  constructor(todoList) {
    this.todoList = todoList
  }
  addItem(subject, date) {
    const todoItem = createTodoItem(subject, date)
    return new TodoList(this.todoList.concat(todoItem))
  }
  toString() {
    return this.todoList
      .map(todoItemToString)
      .join('\n')
  }
}

const createTodoItem = (subject, date) => {
  return {subject, date}
}
const todoItemToString = ({subject, date}) => {
  return `[${date}] ${subject}`
}

const todoList = new TodoList([])
  .addItem('새해인사', 20200101)
  .addItem('화분 물주기', 20200102)
  .addItem('분리수거', 20200103)

console.log(todoList.toString())
