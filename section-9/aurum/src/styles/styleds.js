import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #161616;
`
const Content = styled.SafeAreaView`
  flex: 1;
  background-color: #161616;
`
const Section = styled.SafeAreaView`
  flex: 1;
  padding: 10px 20px 0px 20px;
  justify-content: ${props => props.centered && 'center'};
  align-items: ${props => props.centered && 'center'};
`
const Modal = styled.KeyboardAvoidingView`
  width: 75%;
  align-items: center;
  justify-content: center;
`
const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 15px;
`
const Form = styled.View`
  width: 100%;
`
const Title = styled.Text`
  font-size: 25px;
  color: #efe;
  font-weight: bold;
  margin-bottom: 20px;
`
const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-bottom-color: #2aa444;
  border-bottom-width: 2px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #eee;
  background-color: #1e1e1e99;
  border-radius: 5px;
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
  height: 50px;
  background-color: ${props => props.disableStyle};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-vertical: 30px;
  box-shadow: 0px 0px 8px ${props => props.shadow};
`
const ButtonText = styled.Text`
  color: ${props => props.disableStyle};
  font-size: 20px;
  font-weight: bold;
`
const Select = styled.Picker`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: none;
  border-bottom-color: #2aa444;
  border-bottom-width: 2px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #eee;
  background-color: #1e1e1e99;
  border-radius: 5px;
  align-items: center;
`
const CashHistory = styled.View`
  flex: 1;
  background-color: #444;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 15px;
`
const Incoming = styled.View`
  width: 65%;
  height: 50px;
  background-color: '#2aa444';
  border-radius: 10px;
  border-top-right-radius: 20px;
`
const Outcoming = styled.View`
  width: 65%;
  height: 50px;
  background-color: '#8a251c';
  border-radius: 10px;
  border-bottom-left-radius: 20px;
`

export {
  Container, 
  Modal, 
  Logo, 
  Form,
  Input, 
  CheckBox, 
  Button, 
  ButtonText,
  Content,
  Section,
  Title,
  Select,
  CashHistory, 
  Incoming, 
  Outcoming
}