import { Titulo } from '../Titulo'
// import styles from './Hero.module.css'
import { ExtendedContainer, HeroForm } from './styles'

const Hero = () => (
  <HeroForm>
    <ExtendedContainer>
      <Titulo fontSize={48} fontFamilly="Gloock, serif" as="h2">
        As melhores vagas para tecnologia, design e artes visuais.
      </Titulo>
    </ExtendedContainer>
  </HeroForm>
)

export default Hero
