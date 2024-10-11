import styled from 'styled-components'
import { Container } from '../../styles'

export const HeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: ${({ theme }) => theme.backgroundImage};
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.corPrimary};
    content: '';
    opacity: 0.7;
  }
`

export const ExtendedContainer = styled(Container)`
  position: relative;
  color: #eee;
`
