import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {

  const [mediumSpeed, setMediumSpeed] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");

  // Função para calcular a velocidade média
  const calculateMediumSpeed = () => {
    const dist = parseFloat(distance);
    const tim = parseFloat(time);

    if (isNaN(dist) || isNaN(tim) || tim === 0) {
      alert("Entrada inválida! Insira valores numéricos e tempo maior que 0.");
      return;
    }

    const speed = dist / tim;
    setMediumSpeed(speed.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Distância Percorrida (m):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />

      <Text style={styles.label}>Tempo (s):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={time}
        onChangeText={setTime}
      />

      <TouchableOpacity onPress={calculateMediumSpeed} style={styles.button}>
          <Text style={styles.buttonText}>Calcular Velocidade</Text>
      </TouchableOpacity>

      {mediumSpeed !== null && (
        <Text style={styles.result}>Velocidade Média: {mediumSpeed} m/s</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#141414",
    gap: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#f0f0f0",
  },
  input: {
    width: "30%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    color: "#f0f0f0",
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    color: "#f0f0f0",
  },

  button: {
    backgroundColor: "#5c57c0",
    padding: 10,
    width: "30%",
    borderRadius: 4,
  },

  buttonText: {
    color: "#f0f0f0",
    textAlign: "center",
    fontWeight: "bold",
  }
});