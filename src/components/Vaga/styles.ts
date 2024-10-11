import styled from 'styled-components'
import { Titulos } from '../Titulo/styles'

export const Vagas = styled.li`
  border: 1px solid ${({ theme }) => theme.corPrimary};
  background-color: ${({ theme }) => theme.corSecondary};
  color: ${({ theme }) => theme.corPrimary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.corPrimary};
    color: ${({ theme }) => theme.corSecondary};
  }

  &:hover a {
    border-color: ${({ theme }) => theme.corPrimary};
    background-color: ${({ theme }) => theme.corSecondary};
    color: ${({ theme }) => theme.corPrimary};
  }
`

export const TituloVagas = styled(Titulos)`
  font-weight: bold;
  margin-bottom: 16px;
`
