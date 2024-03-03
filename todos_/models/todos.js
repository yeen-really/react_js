import { pool } from "../database/index.js";

export class Todos {
  static async getAllTodos() {
    const allTodosDBResponse = await pool.query("select * from todos", []);

    return allTodosDBResponse.rows;
  }

  static async createTodo(title, description, completed, tagsId) {
    await pool.query(
      "insert into todos(title, description, completed, tag_id) values($1, $2, $3, $4)",
      [title, description, completed, tagsId]
    );
  }

  static async patchTodoById(todoId, title, description, completed, tagsId) {
    await pool.query(
      'update todos set title="$2", description="$3", completed="$4", tag_id=$5 where id=$1',
      [todoId, title, description, completed, tagsId]
    );
  }

  static async deleteTodoById(id) {
    try {
      const findedTodosDBResponse = await pool.query(
        "select * from todos where id = $1",
        [id]
      );
      if (findedTodosDBResponse.rowCount === 0) {
        throw new Error();
      }
      await pool.query("delete from todos where id = $1", [id]);
      return;
    } catch (e) {
      throw new Error("Ошибка удаления");
    }
  }
}
