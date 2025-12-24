function TaskItem({ task, onDelete, onUpdate }) {
    return (
        <div className="task-item">
            <div className="task-actions">
                <button
                    className="update-btn"
                    onClick={() => onUpdate(task)}
                >
                    ✏️
                </button>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(task.id)}
                >
                    🗑
                </button>
            </div>

            <h3 className="task-title">{task.title}</h3>

            <div className="task-meta">
                <span>📅 {task.date}</span>
                <span>⏰ {task.time}</span>
            </div>
        </div>
    );
}

export default TaskItem;
