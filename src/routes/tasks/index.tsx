import { createFileRoute, Link } from "@tanstack/react-router";
import TodoItem from "../../components/tasks/todo-item";

export const Route = createFileRoute("/tasks/")({
  component: Index,
});

function Index() {
  const tasks = [
    { id: "1", title: "Task 1" },
    { id: "2", title: "Task 2" },
    { id: "3", title: "Task 3" },
  ];

  return (
    <div>
      <h3>Tasks page!</h3>
      <div className="">
        {tasks.map((t, idx) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </div>
    </div>
  );
}
