import React, { useState } from 'react'

import Calendar from 'react-calendar'
import './TodoCalendar.css'

const TodoCalendar = ({ dateValue, onChangeShowTodo }) => {
  return (
    <>
      <Calendar onChange={onChangeShowTodo} value={dateValue} />
    </>
  )
}

export default TodoCalendar
