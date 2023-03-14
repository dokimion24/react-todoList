import { axiosInstance } from './axios'

import { Todo } from '.'

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axiosInstance.get(``)

  return response.data
}

export const addTodo = async (title: string) => {
  const response = await axiosInstance.post(``, { title })
  return response.data
}

export const editTodo = async (todo: Todo): Promise<Todo> => {
  const { title, done, id } = todo
  const response = await axiosInstance.put(`/${id}`, {
    title,
    done,
  })
  return response.data
}

export const deleteTodo = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/${id}`)
}
