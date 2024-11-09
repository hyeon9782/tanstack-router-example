import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$taskId/")({
  component: () => {
    const { taskId } = Route.useParams();

    return <div>Hello /tasks/$taskId/! {taskId}</div>;
  },
});
