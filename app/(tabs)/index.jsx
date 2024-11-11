// import { View, Text, StyleSheet, TextInput } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { TouchableOpacity } from "react-native";

// const index = () => {
//   const [email, setEmail] = useState("");

//   const valueEmail = () => {
//     console.log(email);
//     setEmail("");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text
//           style={styles.heading}
//         >
//           Sign In {" "}
//         </Text>
//       </View>

//       <TextInput
//         style={styles.input}
//         onChangeText={setEmail}
//         value={email}
//         placeholder="Enter Your Email"
//       />
//       <TouchableOpacity style={styles.button} onPress={valueEmail}>
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   heading: {
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "0f0f0f0",
//     // alignItems: "center",
//     padding: 10,
//   },
// });

// export default index;

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/config";
import { Link } from "expo-router";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from '@/config/firebase/config';
// import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  // use dispatch for sending data
  // const dispatch = useDispatch()

  const registerUser = async () => {
    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
          Register User
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Enter your Email"
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <View style={{ margin: 20 }}>
          <Button title="Press me" onPress={registerUser} />
        </View>

        <View>
          <FlatList
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Link href={"/"}>Home</Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
