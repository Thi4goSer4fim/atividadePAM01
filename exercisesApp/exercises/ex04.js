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

  // Função para calcular a Força
  const calculateTemperature = (type) => {
    const n1 = parseFloat(num1);

    if (isNaN(n1)) {
      alert("Entrada inválida! Insira um valor numérico");
      return;
    }

    if (type == "celsius") {
      const total = (n1 - 32) / 1.8;
      setTotal(total.toFixed(2) + "°C");
    } else if (type == "fahrenheit") {
      const total = n1 * 1.8 + 32;
      setTotal(total.toFixed(2) + "°F");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/fire.png")} style={styles.logo} />
      <Text style={styles.label}>Temperatura:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TouchableOpacity
        onPress={() => calculateTemperature("celsius")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Calcular fahrenheit para celsius</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => calculateTemperature("fahrenheit")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Calcular celsius para fahrenheit</Text>
      </TouchableOpacity>

      {total !== null && (
        <Text style={styles.result}>Temperatura: {total} </Text>
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
