import { useState } from "react";
import { createTask } from "../api/taskApi";

function CreateTask({ onTaskCreated }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createTask({ title, date, time });

        setTitle("");
        setDate("");
        setTime("");
        onTaskCreated();
    };

    return (
        <div className="create-section">
            <h2>Create Task</h2>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Task title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />

                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                />

                <input
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    required
                />

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default CreateTask;
