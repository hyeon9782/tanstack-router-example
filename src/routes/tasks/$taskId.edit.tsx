import { createFileRoute } from "@tanstack/react-router";

type SearchParams = Partial<{
  page: number;
  search: string;
  tags: string[];
}>;

export const Route = createFileRoute("/tasks/$taskId/edit")({
  component: () => <div>Hello /tasks/$taskId/edit!</div>,
});
