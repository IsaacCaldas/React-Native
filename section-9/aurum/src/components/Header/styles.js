import styles from 'styled-components/native'

const HeaderApp = styles.View`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
`
const HeaderText = styles.Text`
  color: #2aa444;
  font-size: 20px;
  font-weight: bold;
`

export {
  HeaderApp,
  HeaderText
}