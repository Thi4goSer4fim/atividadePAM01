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

  // Função para calcular a Força

  const calculateForce = () => {
    const n1 = parseFloat(num1);

    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n1)) {
      alert("Entrada inválida! Insira valores numéricos");

      return;
    }

    const force = n1 * n2;

    setTotal(force.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/forca.webp")} style={styles.logo} />

      <Text style={styles.label}>Massa (kg):</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <Text style={styles.label}>Aceleração (m/s²):</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity onPress={calculateForce} style={styles.button}>
        <Text style={styles.buttonText}>Calcular Força</Text>
      </TouchableOpacity>

      {total !== null && <Text style={styles.result}>Força: {total} N</Text>}
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
