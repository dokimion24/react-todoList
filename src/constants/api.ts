import axios from 'axios'

import { Todo } from './index'

const headers = {
  apikey: `${import.meta.env.VITE_API_KEY}`,
  username: `${import.meta.env.VITE_USERNAME}`,
}

console.log(headers)

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`, {
    headers,
  })

  return response.data
}

export const addTodo = async (title: string) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}`, { title }, { headers })
  return response.data
}

export const editTodo = async (todo: Todo): Promise<Todo> => {
  const { title, done, id } = todo
  const response = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/${id}`,
    {
      title,
      done,
    },
    { headers },
  )
  return response.data
}

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${import.meta.env.VITE_BASE_URL}/${id}`, { headers })
}
