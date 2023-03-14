import React, { useState, useEffect, FormEvent } from 'react'

import styled from 'styled-components'
import { GlobalStyle } from './style/GlobalStyle'

import TodoList from './components/TodoList/TodoList'
import { fetchTodos, deleteTodo, addTodo, editTodo } from './constants/request'
import { getDateObj } from './constants/getDate'
import { Todo, TodayDate } from './constants'

const TodoWrapper = styled.div`
  display: flex;
`

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [todoInputValue, setTodoInputValue] = useState<string>('')
  const [numberOfLeftTodo, setNumberOfLeftTodo] = useState<number>(0)

  const [dateTime, setDateTime] = useState<TodayDate>(getDateObj(new Date()))

  const getNumberOfLeftTodo = (): number => {
    const newTodos = todos.filter((todo: Todo) => todo.done === false)
    return newTodos.length
  }

  const initTodos = async (): Promise<void> => {
    setIsloading(true)
    setError('')
    try {
      const fetchedTodos = await fetchTodos()
      const sortedTodos = fetchedTodos.sort((a, b) => (a.done ? 1 : 0) - (b.done ? 1 : 0))
      setTodos(sortedTodos)
      setIsloading(false)
    } catch (error: any) {
      setIsloading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    initTodos()
  }, [])

  useEffect(() => {
    setNumberOfLeftTodo(getNumberOfLeftTodo())
  }, [todos])

  const handleClickDeleteTodo = async (id: string): Promise<void> => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
    await deleteTodo(id)
  }

  const handleSubmitAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (todoInputValue.trim().length === 0) {
      alert('할 일을 입력해주세요')
      return
    }

    const newTodos = await addTodo(todoInputValue)
    setTodos((prev) => [newTodos, ...prev])
  }

  const handleClickToggleTodoDone = async (clickedTodo: Todo): Promise<void> => {
    const newTodos = todos.map((todo) => {
      if (todo.id === clickedTodo.id) {
        todo.done = !clickedTodo.done
      }
      return todo
    })
    newTodos.sort((a, b) => (a.done ? 1 : 0) - (b.done ? 1 : 0))
    setTodos(newTodos)
    await editTodo(clickedTodo)
  }

  const handleClickEditTodo = async (clickedTodo: Todo, title: string): Promise<void> => {
    clickedTodo.title = title
    const newTodos = todos.map((todo) => {
      if (todo.id === clickedTodo.id) {
        todo.title = clickedTodo.title
      }
      return todo
    })

    setTodos(newTodos)
    await editTodo(clickedTodo)
  }

  return (
    <>
      <GlobalStyle />
      <TodoWrapper>
        <TodoList
          numberOfLeftTodo={numberOfLeftTodo}
          handleSubmitAddTodo={handleSubmitAddTodo}
          todoInputValue={todoInputValue}
          setTodoInputValue={setTodoInputValue}
          todos={todos}
          isLoading={isLoading}
          error={error}
          handleClickDeleteTodo={handleClickDeleteTodo}
          handleClickToggleTodoDone={handleClickToggleTodoDone}
          handleClickEditTodo={handleClickEditTodo}
          dateTime={dateTime}
        />
      </TodoWrapper>
    </>
  )
}

export default App
