import { Titulos } from './styles'

export type PropsTitle = {
  children: string
  fontSize?: number
  as?: React.ElementType
  fontFamilly?: string
}

export const Titulo = ({ children, fontSize, as, fontFamilly }: PropsTitle) => (
  <Titulos fontSize={fontSize} as={as} fontFamilly={fontFamilly}>
    {children}
  </Titulos>
)
