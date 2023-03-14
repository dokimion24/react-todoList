import styled from 'styled-components'

export const TodoHeadBlock = styled.div`
  padding: 12px 0;
`

export const TodoDate = styled.div`
  font-size: 24px;
  marign-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 32px;

  & div + div {
    font-size: 20px;
  }

  span {
    color: var(--font-color);
    font-weight: 600;
  }
`
