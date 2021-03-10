import { Container, Logo, Title, Description, Illustration } from './style'

interface IMainProps {
  title: string
  description: string
}

export const Main: React.FC<IMainProps> = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <Container>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado"
        title="Logo"
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com código"
        title="illustration"
      />
    </Container>
  )
}
