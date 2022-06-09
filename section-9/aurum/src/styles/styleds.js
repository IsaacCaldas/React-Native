import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222;
`
const Modal = styled.KeyboardAvoidingView`
  width: 75%;
  align-items: center;
  justify-content: center;
`
const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`
const Form = styled.View`
  width: 100%;
`
const InputArea = styled.View`
`
const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-bottom-color: #2aa444;
  border-bottom-width: 2px;
  margin-bottom: 35px;
  font-size: 16px;
  color: #eee;
  z-index: 100;
`
const CheckBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
  margin-right: 10px;
`
const Button = styled.TouchableOpacity`
  width: 100%;
  height: 35px;
  padding: 30px;
  background-color: #2aa444;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 30px;
  box-shadow: 0px 0px 8px teal;
`
const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

export {
  Container, 
  Modal, 
  Logo, 
  Form, 
  InputArea,
  Input, 
  CheckBox, 
  Button, 
  ButtonText 
}