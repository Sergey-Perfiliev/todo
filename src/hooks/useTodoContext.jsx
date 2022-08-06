import { useContext } from "react";
import { TodoContext } from "../contexts/Provider";

export const useTodoContext = () => useContext(TodoContext)
