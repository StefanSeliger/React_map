const ToDoItems = (props) => {
    return (
        <div>
            <input type="checkbox" name="" id="" checked={props.completed}/> 
            <label htmlFor="">{props.task}</label>
        </div>
    );
}

export default ToDoItems;