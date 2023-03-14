import styled from 'styled-components'

import { TodoItemListBlockProps } from '../../constants'

export const TodoItemListBlock = styled.div<TodoItemListBlockProps>`
  overflow-y: auto;

  &:: -webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--font-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: whitesmoke;
    border-radius: 10px;
  }
`
