import React from 'react'

export interface Todo {
  id?: string // 할 일 ID
  order?: number // 할 일 순서
  title?: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt?: string // 할 일 생성일
  updatedAt?: string // 할 일 수정일
}

export interface TodayDate {
  year: string
  month: string
  date: string
  day: string
}

export interface TodoListProps {
  numberOfLeftTodo: number
  handleSubmitAddTodo: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  todoInputValue: string
  setTodoInputValue: React.Dispatch<React.SetStateAction<string>>
  todos: Todo[]
  isLoading: boolean
  error: string
  handleClickDeleteTodo: (id: string) => Promise<void>
  handleClickToggleTodoDone: (todo: Todo) => Promise<void>
  handleClickEditTodo: (todo: Todo, title: string) => Promise<void>
  dateTime: TodayDate
}

export interface TodoItemListProps {
  todos: Todo[]
  isLoading: boolean
  error: string
  handleClickDeleteTodo: (id: string) => Promise<void>
  handleClickToggleTodoDone: (todo: Todo) => Promise<void>
  handleClickEditTodo: (todo: Todo, title: string) => Promise<void>
}

export interface TodoItemListBlockProps {
  todos: Todo[]
}

export interface TodoItemBlockProps {
  done: boolean
}

export interface TodoItemProps {
  todo: Todo
  handleClickDeleteTodo: (id: string) => Promise<void>
  handleClickToggleTodoDone: (todo: Todo) => Promise<void>
  handleClickEditTodo: (todo: Todo, title: string) => Promise<void>
}

export interface TodoFormProps {
  handleSubmitAddTodo: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  todoInputValue: string
  setTodoInputValue: React.Dispatch<React.SetStateAction<string>>
}
