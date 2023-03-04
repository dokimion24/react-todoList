import styled from 'styled-components'

export const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin-bottom: 10px;
  color: ${(props) => (props.done ? '#ccc' : '#000')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};

  & svg {
    color: ${(props) => (props.done ? '#ccc' : '#000')};
  }

  & > div + div button:first-child {
    display: ${(props) => (props.done ? 'none' : 'inline')};
  }
`

export const Button = styled.button`
  background-color: #fff;
  padding: 4px;

  &:hover {
    color: var(--font-color);
  }
`

export const Input = styled.input`
  font-size: 16px;
  border-bottom: 1px solid var(--border-color);
`
