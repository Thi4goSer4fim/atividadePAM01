import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, 
  Image, Button } from 'react-native';

export default function App() {

  const [mediumSpeed, setMediumSpeed] = useState(''); 
  const [time, setTime] = useState(''); 
  const [distance, setDistance] = useState(''); 

  const calculateMediumSpeed = () => {
    const dist = parseFloat(distance);
    const tim = parseFloat(time);

    if(isNaN(distance) || isNaN(time)){
      setMediumSpeed("Entrada inválida, os valores não são números");
      return;
    }

    setMediumSpeed(dist/tim);
  }
  

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placehold.co/150'  }} style={styles.image}/>
      <Text>Calcular Ve1locidade Média</Text>
      <TextInput style={styles.input} placeholder="Digite o 1º número" keyboardType="numeric" value={num1}onChangeText={(text) => setNum1(text)}/>
      <TextInput style={styles.input} placeholder="Digite o 2º número" keyboardType="numeric" value={num2} onChangeText={(text) => setNum2(text)}/>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => calcular('-')}>
<Text style={styles.buttonText}>-</Text>
</TouchableOpacity>


      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 100, height: 100, marginTop: 20,
  },
});
