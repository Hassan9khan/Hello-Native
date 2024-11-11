import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

const index = () => {
  const [email, setEmail] = useState("");

  const valueEmail = () => {
    console.log(email);
    setEmail("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={styles.heading}
        >
          Sign In {" "}
        </Text>
      </View>

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
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
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
    backgroundColor: "0f0f0f0",
    // alignItems: "center",
    padding: 10,
  },
});

export default index;
