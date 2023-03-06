import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: end;
  margin: 20px 0px;
`

export const TodoAddInput = styled.input`
  font-size: 14px;
  border-bottom: 1px solid var(--border-color);
  width: 60%;
`

export const TodoAddBtn = styled.button<any>`
  margin-left: 6px;
  padding: 2px 4px;
  background-color: #fff;

  &:hover {
    color: var(--font-color);

    & svg {
      color: #fff;
      background-color: var(--font-color);
      border-radius: 50%;
    }
  }

  & span {
    display: flex;
    align-items: center;
  }

  & svg {
    width: 20px;
    height: 20px;
    color: var(--font-color);
    margin-right: 4px;
    padding: 4px;
  }
`
