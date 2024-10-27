import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

const index = () => {
  const [email, setEmail] = useState("");

  const valueEmail = () => {
    console.log(email);
    setEmail("")
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Hello World React{" "}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Your Email"
      />
      <TouchableOpacity style={styles.button} onPress={valueEmail}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    padding: 10,
  },
});

export default index;
