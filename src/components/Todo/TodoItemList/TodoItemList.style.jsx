import styled from 'styled-components'

export const TodoItemListBlock = styled.div`
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