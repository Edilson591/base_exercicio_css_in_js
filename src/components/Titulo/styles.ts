import styled from 'styled-components'

import { PropsTitle } from '.'

export const Titulos = styled.h3<PropsTitle>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '19px')};
  font-family: ${(props) =>
    props.fontFamilly ? props.fontFamilly : 'Lato, sans-serif'};
`
