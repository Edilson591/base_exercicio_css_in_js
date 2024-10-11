import styled from 'styled-components'

import { PropsLinks } from '.'

export const Link = styled.a<PropsLinks>`
  border-color: ${({ theme }) => theme.corSecondary};
  background-color: ${({ theme }) => theme.corPrimary};
  color: ${({ theme }) => theme.corSecondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
