import { ObjectId } from "mongodb"

export interface Todo {
  _id?: ObjectId,
  id: string,
  title: string,
  description: string,
  completed: boolean
}