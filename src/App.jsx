import React from 'react'
import TodoCalendar from './components/Calendar/TodoCalendar'
import TodoList from './components/Todo/TodoList/TodoList'

import styled from 'styled-components'
import { GlobalStyle } from './style/GlobalStyle'

const TodoWrapper = styled.div`
  display: flex;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoWrapper>
        <TodoCalendar />
        <TodoList />
      </TodoWrapper>
    </>
  )
}

export default App
