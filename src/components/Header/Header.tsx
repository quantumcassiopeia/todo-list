import React, { useContext } from "react";
import { Statscard } from "../Statscard/Statscard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../Context/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>

          <span>Bem-vindo, usuário!</span>
        </div>

        <div>
          <Statscard title="Total de Tarefas" value={totalTasks} />
          <Statscard title="Tarefas Pendentes" value={totalPending} />
          <Statscard title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
