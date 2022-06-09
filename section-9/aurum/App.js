import { Container, Title, Name, Button, ButtonText } from './src/styles/styleds'

export default function App() {
  return (
    <Container>
      <Title color="#aa3" size="40">Hello World! I'm a styled component</Title>
      <Name>Hello Isaac</Name>
      <Button onPress={() => alert('Hi!')}>
        <ButtonText>Bye</ButtonText>
      </Button>
    </Container>
  )
}