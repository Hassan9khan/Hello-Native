import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';



const Maps = () => {
  const [location, setLocation] = useState(null); // User's current location
  const [errorMsg, setErrorMsg] = useState(null); // For error message if permission is denied
  const [search, setSearch] = useState(''); // Stores the search query
  const [places, setPlaces] = useState(null); // Stores the list of places from search results
  const [singlesearchPlace, setsinglesearchPlace] = useState(null); // Stores the selected place's coordinates
  const [region, setRegion] = useState(null); // Stores the map's region
  const [direction, setDirection] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  // search places
  const searchPlaces = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'fsq3qbL9ORBTq2ZaS6TUHxpAQZNDJjTlkT2lBeAynwmhZ8I=',
      },
    };

    fetch(`https://api.foursquare.com/v3/places/search?query=${search}&ll=${location.coords.latitude}%2C${location.coords.longitude}&radius=100000`, options)
      .then(res => res.json())
      .then(res => {
        setPlaces(res.results);
      })
      .catch(err => console.error(err));
  };

//   // Handle single place selection
//   interface Geocodes {
//     main: {
//       latitude: number;
//       longitude: number;
//     };
//   }

//   interface PlaceItem {
//     fsq_id: string;
//     name: string;
//     geocodes: Geocodes;
//   }

  const singlePlace = (item) => {
    console.log(item);

    // Only update region if the place is different from the previous selection
    if (
      !singlesearchPlace ||
      singlesearchPlace.latitude !== item.geocodes.main.latitude ||
      singlesearchPlace.longitude !== item.geocodes.main.longitude
    ) {
      setsinglesearchPlace({
        latitude: item.geocodes.main.latitude,
        longitude: item.geocodes.main.longitude,
      });
      setRegion({
        latitude: item.geocodes.main.latitude,
        longitude: item.geocodes.main.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

//   interface SinglePlace {
//     latitude: number;
//     longitude: number;
//   }
  
//   interface AllPlaces {
//     fsq_id: string;
//     name: string;
//   }

  return (
    <SafeAreaView style={styles.container}>
      {location && region && (
        <MapView region={region} style={styles.map} showsUserLocation={true}>
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
          {singlesearchPlace && (
            <Marker
              coordinate={{
                latitude: singlesearchPlace.latitude,
                longitude: singlesearchPlace.longitude,
              }}
            />
          )}
          {singlesearchPlace && direction && (
            <Polyline
              coordinates={[
                {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                },
                {
                  latitude: singlesearchPlace.latitude,
                  longitude: singlesearchPlace.longitude,
                },
              ]}
              strokeWidth={5}
              strokeColor="#000000"
            />
          )}
        </MapView>
      )}
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Search"
      />
      <TouchableOpacity onPress={searchPlaces} style={styles.button}>
        <Text>Search</Text>
      </TouchableOpacity>
      {places && (
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Text onPress={() => singlePlace(item)}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.fsq_id}
        />

      )}

      <TouchableOpacity onPress={() => setDirection(!direction)} style={styles.button}>
        <Text>Direction</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  map: {
    marginTop: -20,
    width: '115%',
    height: '50%',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: '100%',
  },
});

export default Maps

