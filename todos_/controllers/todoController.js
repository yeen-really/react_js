import { Todos } from "../models/todos.js";

export class TodoController {
  static async getAllTodos(req, res) {
    const allTodos = await Todos.getAllTodos();

    res.status(200).send(allTodos);
  }

  static async createTodo(req, res) {
    const { title, description, completed, tagsId } = req.body;

    try {
      await Todos.createTodo(title, description, completed, tagsId);
      res.status(200).end();
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  static async patchTodoById(req, res) {
    const { todoId, title, description, completed, tagsId } = req.body;

    try {
      await Todos.patchTodoById(todoId, title, description, completed, tagsId);
      res.status(200).end();
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  static async deleteTodoById(req, res) {
    const { todoId } = req.params;

    try {
      await Todos.deleteTodoById(todoId);
      res.status(200).end();
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}
