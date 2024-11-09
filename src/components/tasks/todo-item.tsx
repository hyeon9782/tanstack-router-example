import { Box, Card, Checkbox } from "@black-ui/react";
import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <Card direction={true}>
      <Checkbox />
      <span>{todo.title}</span>
    </Card>
  );
};

export default TodoItem;
