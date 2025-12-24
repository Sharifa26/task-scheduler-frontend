import TaskItem from "./TaskItem";
import { getTasks, deleteTask } from "../api/taskApi";
import { useState, useEffect } from "react";


function TaskSection() {

    const [tasks, setTasks] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    const handleUpdate = (task) => {
        console.log("Update clicked:", task);
    };

    const tasksPerPage = 5;

    const handleNext = () => {
        if (startIndex + tasksPerPage < tasks.length) {
            setStartIndex(startIndex + tasksPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - tasksPerPage >= 0) {
            setStartIndex(startIndex - tasksPerPage);
        }
    };

    const visibleTasks = tasks.slice(
        startIndex,
        startIndex + tasksPerPage
    );


    return (
        <div className="task-section">
            <h2>Your Tasks</h2>

            {visibleTasks.map((task, index) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            ))}
            <div className="pagination">
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                >
                    ‹ Prev
                </button>

                <button
                    onClick={handleNext}
                    disabled={startIndex + tasksPerPage >= tasks.length}
                >
                    Next ›
                </button>
            </div>

        </div>
    );
}

export default TaskSection;
