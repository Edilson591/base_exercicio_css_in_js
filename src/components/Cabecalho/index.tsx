import { Titulo } from '../Titulo'
import { Header } from './styles'

const Cabecalho = () => (
  <Header>
    <Titulo fontSize={32} as="h1">
      EBAC Jobs
    </Titulo>
  </Header>
)

export default Cabecalho
