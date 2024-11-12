// import {
//   View,
//   Text,
//   SafeAreaView,
//   TextInput,
//   StyleSheet,
//   Button,
//   FlatList,
// } from "react-native";
// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { addDoc, collection } from "firebase/firestore";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../config/config";
// import { Link } from "expo-router";


// const Home = () => {
//   const [email, onChangeEmail] = React.useState("");
//   const [password, onChangePassword] = React.useState("");

//   // use dispatch for sending data
//   // const dispatch = useDispatch()

//   const signinUser = async () => {
//     console.log(email);
//     console.log(password);

//     signInWithEmailAndPassword (auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//         window.location = 'maps'
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     // try {
//     //   const docRef = await addDoc(collection(db, "users"), {
//     //     first: "Ada",
//     //     last: "Lovelace",
//     //     born: 1815
//     //   });
//     //   console.log("Document written with ID: ", docRef.id);
//     // } catch (e) {
//     //   console.error("Error adding document: ", e);
//     // }
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <Text style={{ textAlign: "center", fontSize: 20, margin: 20 }}>
//           Signin User
//         </Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangeEmail}
//           placeholder="Enter your Email"
//           value={email}
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangePassword}
//           value={password}
//           placeholder="Enter your password"
//           secureTextEntry={true}
//         />
//         <View style={{ margin: 20 }}>
//           <Button title="Press me" onPress={signinUser} />
//         </View>

//         <View>
//           <FlatList
//             renderItem={({ item }) => {
//               return (
//                 <View style={styles.item}>
//                   <Text style={styles.title}>{item.title}</Text>
//                 </View>
//               );
//             }}
//             keyExtractor={(item) => item.id}
//           />
//         </View>
//         <Link href={"/"}>Register</Link>
//       </SafeAreaView>
//      </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   container: {
//     flex: 1,
//     marginTop: 0,
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default Home;


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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/config";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from '@/config/firebase/config';
// import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  // use dispatch for sending data
  // const dispatch = useDispatch()

  const signinUser = async () => {
        console.log(email);
        console.log(password);
    
        signInWithEmailAndPassword (auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'maps'
          })
          .catch((error) => {
            console.log(error);
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
      <SafeAreaView style={styles.box}>
      <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              margin: 20,
              marginHorizontal: 100,
              backgroundColor: "#c2f21e",
              fontWeight: "bold",
              borderRadius: 20,
              fontStyle: "italic",
              textDecorationLine: "underline",
            }}
          >
            Indrive
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            margin: 30,
            color: "white",
            fontWeight: "bold",
            // fontFamily: "cambria"
          }}
        >
          Signin User
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
        {/* <View style={{ margin: 20 , backgroundColor: "#c2f21e" }}>
          <Button style={{ backgroundColor: "#c2f21e" }} title="Press me" onPress={registerUser} />
        </View> */}

        <TouchableOpacity style={styles.button} onPress={signinUser}>
          <Text style={styles.title}>Press Here</Text>
        </TouchableOpacity>

        
        <Link style={{color: "#fff", margin: 12,}} href={"/"}>Not a User ?</Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#c2f21e",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  box: {
    backgroundColor: "#3f3f3f",
    height: "100%",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    // color: "#fff",
    border: "none",
    borderRadius: 8,
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
    fontSize: 18,
  },
});

export default Home;
