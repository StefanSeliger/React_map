import ToDoItems from './ToDoItems.js';
import Data from './Data.js';

const ToDoList = () => {
    return (  
        <section>
            {
                Data.map(elt => <ToDoItems 
                    key={elt.id}
                    completed={elt.completed}
                    task={elt.task}
                />)
            } 
        </section>
    );
}

export default ToDoList;
