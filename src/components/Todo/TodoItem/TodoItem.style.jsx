import styled from 'styled-components';

export const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 4px;

  &:hover {
    color: var(--font-color);
  }
`;
