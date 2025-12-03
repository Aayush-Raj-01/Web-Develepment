import React ,{ useState } from 'react'
function Todolist(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){

    }

    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskup(index){

    }
    function moveTaskdown(index){

    }

    return(
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>
            <div>
                <input
                    type="text" 
                    />

            </div>
        </div>
    );
}
export default todolist