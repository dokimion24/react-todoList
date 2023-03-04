import React, { useState, useEffect } from 'react'
import TodoCalendar from './components/Calendar/TodoCalendar'
import TodoList from './components/Todo/TodoList/TodoList'

import styled from 'styled-components'
import { GlobalStyle } from './style/GlobalStyle'

import { fetchTodos, deleteTodo, addTodo, editTodo } from './constants/api'
import { getDateObj } from './constants/getDate'

const TodoWrapper = styled.div`
  display: flex;
`

const App = () => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)
  const [todoInputValue, setTodoInputValue] = useState('')
  const [numberOfLeftTodo, setNumberOfLeftTodo] = useState()

  const [dateValue, setDateValue] = useState(new Date())
  const [dateTime, setDateTime] = useState(getDateObj(new Date()))

  const compare = () => {
    console.log(dateTime, todos)
    const newTodos = todos.filter((sortedTodo) => {
      return (
        sortedTodo.createdAt.slice(8, 10) === dateTime.date &&
        sortedTodo.createdAt.slice(0, 4) === dateTime.year &&
        sortedTodo.createdAt.slice(5, 7) === dateTime.month
      )
    })

    setTodos(newTodos)
  }

  const onChangeShowTodo = (value) => {
    setDateTime(getDateObj(value))
    compare()
  }

  const getNumberOfLeftTodo = () => {
    const newTodos = todos.filter((todo) => todo.done === false)
    return newTodos.length
  }

  const getClickedDateTodo = (sortedTodos) => {
    const newTodos = sortedTodos.filter((sortedTodo) => {
      return (
        sortedTodo.createdAt.slice(8, 10) === dateTime.date &&
        sortedTodo.createdAt.slice(0, 4) === dateTime.year &&
        sortedTodo.createdAt.slice(5, 7) === dateTime.month
      )
    })

    setTodos(newTodos)
  }

  const HandleFetchTodos = async () => {
    setIsloading(true)
    setError(null)
    try {
      const fetchedTodos = await fetchTodos()
      const sortedTodos = fetchedTodos.sort((a, b) => a.done - b.done)
      getClickedDateTodo(sortedTodos)
      setIsloading(false)
    } catch (error) {
      setIsloading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    ;(async () => {
      HandleFetchTodos()
    })()
  }, [])

  useEffect(() => {
    setNumberOfLeftTodo(getNumberOfLeftTodo())
  }, [todos])

  const onClickDleteTodo = async (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
    await deleteTodo(id)
  }

  const onSubmitTodo = async (e) => {
    e.preventDefault()

    if (todoInputValue.trim().length === 0) {
      alert('할 일을 입력해주세요')
      return
    }

    const newTodos = await addTodo(todoInputValue)
    setTodos((prev) => [newTodos, ...prev])
  }

  const onClickToggleTodoDone = async (clickedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === clickedTodo.id) {
        todo.done = !clickedTodo.done
      }
      return todo
    })
    newTodos.sort((a, b) => a.done - b.done)
    setTodos(newTodos)
    await editTodo(clickedTodo)
  }

  const onClickEditTodoTitle = async (clickedTodo, title) => {
    console.log(clickedTodo)
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
        <TodoCalendar dateValue={dateValue} setDateValue={setDateValue} onChangeShowTodo={onChangeShowTodo} />
        <TodoList
          numberOfLeftTodo={numberOfLeftTodo}
          onSubmitTodo={onSubmitTodo}
          todoInputValue={todoInputValue}
          setTodoInputValue={setTodoInputValue}
          todos={todos}
          isLoading={isLoading}
          error={error}
          onClickDleteTodo={onClickDleteTodo}
          onClickToggleTodoDone={onClickToggleTodoDone}
          onClickEditTodoTitle={onClickEditTodoTitle}
          dateTime={dateTime}
        />
      </TodoWrapper>
    </>
  )
}

export default App
