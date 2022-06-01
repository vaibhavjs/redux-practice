import { useDispatch } from "react-redux";
import { todoActions } from "../store";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(todoActions.deleteTodo({ id: id }));
  };

  return (
    <li className="list-group-item list-group-item-success">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">{title}</span>
        <button className="btn btn-danger" onClick={removeTodo}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
