import { Image, Text, View } from 'react-native'
import styles from './styles'

const BigLogo = () => {
  return (
    <View style={styles.div}>
        <Image source={require('./../../../assets/logo-senai1.png')} style={styles.image}/>
        <View>
      <Text style={styles.title}>Historico de</Text>
      <Text style={styles.title}>Manutenção</Text>
      <Text style={styles.title}>de Maquinas</Text>
      </View>
    </View>
  )
}

export default BigLogo