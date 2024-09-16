import { View, Text} from 'react-native';
import styles from './styles';
import BigLogo from '../../components/BigLogo';


export default function Developers() {
  return (
    <View style={styles.background}>
      <BigLogo />
<Text>Bem-vindo a pagina de Desenvolvedores</Text>
    </View>
  )
}