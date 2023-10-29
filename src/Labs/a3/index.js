import JavaScript from "./Javascript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import TodoItem from "./todo/TodoItem";
import { useSelector } from "react-redux";
function Assignment3() {
 const { todos } = useSelector((state) => state.todosReducer);
 return (
  <div>
   <h1>Assignment 3</h1>
   <TodoItem />
   <TodoList />
   <ConditionalOutput />
   <Styles />
   <Classes />
   <PathParameters />
   <JavaScript />
   <ul className="list-group">
    {todos.map((todo) => (
     <li className="list-group-item" key={todo.id}>
      {todo.title}
     </li>
    ))}
   </ul>
  </div>
 );
}
export default Assignment3;
