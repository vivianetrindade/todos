import { RequestHandler } from "express";
import { collections } from "./db";
import { Todo } from '../models/todo';

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const newTodo = req.body as Todo;
    const result = await collections.todos?.insertOne(newTodo);
    result
      ? res.status(201).send(`Successfully created a new todo with id ${result.insertedId}`)
      : res.status(500).send('Failed to create a new game');
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
}

export const getTodos: RequestHandler = async (req, res) => {
  try {
    const todos = (await collections.todos!.find({}).toArray()) as Todo[];
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const deleteTodos: RequestHandler =async (req, res) => {
  const id = req.params.id;

  try {
    const result = await collections.todos?.deleteOne({id: id})

    if (result && result.deletedCount) {
      res.status(202).send('Successfully deleted todo.')
    } else if (!result) {
      res.status(400).send('Failed to delete todo');
    } else if (!result.deletedCount) {
      res.status(404).send('Todo not found!');
    }
  } catch (error) {
    res.status(400).send(error);
  }
}