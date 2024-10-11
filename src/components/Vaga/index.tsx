import { Links } from '../Links'
import { Vagas, TituloVagas } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  localizacao,
  modalidade,
  nivel,
  requisitos,
  salarioMax,
  salarioMin,
  titulo
}: Props) => (
  <Vagas>
    <TituloVagas>{titulo}</TituloVagas>
    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <Links href="#">Ver detalhes e candidatar-se</Links>
  </Vagas>
)

export default Vaga
