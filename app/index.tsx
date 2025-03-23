import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const App = () => {
  // State to manage user input
  const [text, setText] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  // Event handler for text input
  const handleChangeText = (input: string) => {
    setText(input);
  };

  // Event handler for button press
  const handleButtonPress = () => {
    Alert.alert("Button Pressed", `You typed: ${text}`);
  };

  // Event handler for counter increment
  const incrementCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 20);
    }, 10000);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic React Native App</Text>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChangeText}
        placeholder="Type something"
      />

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>

      <View style={styles.counterContainer}>
        <Button title="Increment Count" onPress={incrementCounter} />
        <Text style={styles.counterText}>Counter: {count}</Text>
      </View>

      <Text style={styles.footer}>
        This is a basic event handling example in React Native!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  counterContainer: {
    marginBottom: 20,
  },
  counterText: {
    fontSize: 18,
    marginTop: 10,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: "#555",
  },
});

export default App;
