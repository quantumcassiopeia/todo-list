import { Header } from "./components/Header/Header";
import { TasksProvider } from "./Context/TasksContext";
import "./Styles/global.css";
import { Tasks } from "./Tasks/Tasks";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}

export default App;
