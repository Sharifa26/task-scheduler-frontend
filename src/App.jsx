import './style/App.css'
import TaskSection from "./components/TaskList";
import CreateTask from "./components/CreateTask";

function App() {
  const taskSectionRef = {};

  return (
    <>
      <div className="header">Task Scheduler</div>

      <div className="main">
        <TaskSection />
        <CreateTask onTaskCreated={() => window.location.reload()} />
      </div>
    </>
  );
}

export default App;
