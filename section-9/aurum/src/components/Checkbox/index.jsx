import { CheckBox } from '../../styles/styleds'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Checkbox({
  checked,
  setChecked
}) {
  return (
    <CheckBox 
      bgColor={checked ? '#2aa444' : 'transparent' }
      borderColor={checked ? '#2aa444' : '#fff' }
      onPress={() => setChecked(!checked)}
    >
      { checked &&
        <FontAwesome
          name="check"
          size={13}
          color="#fff"
        />
      }
    </CheckBox>
  )
}