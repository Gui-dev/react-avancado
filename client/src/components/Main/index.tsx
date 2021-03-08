import { Container, Logo, Title, Description, Illustration } from './style'

export const Main: React.FC = () => {
  return (
    <Container>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado"
        title="Logo"
      />
      <Title>React Avançado</Title>
      <Description>Typescript, ReactJS, NextJS e Styled Components</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com código"
        title="illustration"
      />
    </Container>
  )
}
