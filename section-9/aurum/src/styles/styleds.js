import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #a3442a;
`
const Title = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: bold;
`
const Name = styled.Text`
  color: #fff;
  font-size: 20px;
`
const Button = styled.TouchableOpacity`
  width: 95%;
  height: 35px;
  padding: 30px;
  background-color: #2aaaaa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 30px;
`
const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

export {
  Container,
  Title,
  Name,
  Button, 
  ButtonText
}