import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.corSecondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisa = styled.button`
  background-color: ${({ theme }) => theme.corPrimary};
  border: 1px solid ${({ theme }) => theme.corPrimary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.corSecondary};
  margin-left: 8px;
  cursor: pointer;
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.corPrimary};
`
