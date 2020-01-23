const createTodoItem = (subject, date) => {
  return {subject, date}
}
const todoItemToString = (todoItem) => {
  return `[${todoItem.date}] ${todoItem.subject}`
}
const addItem = (todoList, todoItem) => {
  return [...todoList, todoItem]
}
const todoListToString = (todoList) => {
  return todoList
    .map(todoItemToString)
    .join('\n')
}

const todoList = [
  ['새해인사', 20200101],
  ['화분물주기', 20200102],
  ['분리수거', 20200103],
]
  .map(([subject, date]) => createTodoItem(subject, date))
  .reduce(addItem)
console.log(todoListToString(todoList))
/*
[20200101] 새해인사
[20200102] 화분물주기
[20200103] 분리수거
*/
