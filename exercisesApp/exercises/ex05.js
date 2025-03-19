import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [total, setTotal] = useState("");

  const [num1, setNum1] = useState("");

  const [num2, setNum2] = useState("");

  // Função para calcular a Energia

  const calculateKineticEnergy = (mass, velocity) => {
    const n1 = parseFloat(mass);

    const n2 = parseFloat(velocity);

    if (isNaN(n1) || isNaN(n1)) {
      alert("Entrada inválida! Insira valores numéricos");

      return;
    }

    return ((n1 * (n2 * n2)) / 2).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/ec.jpg")} style={styles.logo} />

      <Text style={styles.label}>Massa (kg):</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <Text style={styles.label}>Velocidade: (s):</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity
        onPress={() => setTotal(calculateKineticEnergy(num1, num2))}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Calcular Força Cinética</Text>
      </TouchableOpacity>

      {total !== null && (
        <Text style={styles.result}>Energia Cinética: {total} J</Text>
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

    gap: 10,
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
  },

  logo: {
    width: 100,

    height: 100,

    resizeMode: "contain",
  },
});
