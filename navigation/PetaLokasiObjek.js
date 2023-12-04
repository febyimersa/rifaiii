import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import Getjsonfile from '../Getjsonfile';
import { WebView } from 'react-native-webview';

const Tab = createBottomTabNavigator();

//Form input dari github pages
const forminput = 'https://febyimersa.github.io/rifai/'

//Peta web
const webmap = 'https://febyimersa.github.io/rifai/map'

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>APLIKASI PETA LOKASI KEDAI KOPI DIY</Text>
            <Text style={styles.description}> DAERAH ISTIMEWA YOGYAKARTA</Text>
            <View style={styles.container}> 
            <Image style={styles.image}
        source={require('ProyekPertama/peta/kopi.jpeg')}/>
            </View>
            <View style={styles.container}> 
            <Text style={{textAlign: 'justify',color:'#1B3D6C', margin: 20}}>
            Permintaan terhadap kedai kopi terus meningkat seiring dengan peningkatan budaya minum kopi di tengah masyarakat menjadi salah satu pemicu bertambahnya jumlah kedai kopi dari tahun ke tahun, termasuk di Kawasan Perkotaan Yogyakarta (KPY). Setiap pelaku usaha dari industri kedai kopitentunya memiliki preferensi tersendiri terhadap konsep, bentuk usaha, target pasar hingga pemilihan lokasi usaha mereka. Salah satu target pasar potensial terhadap inndustri kedai kopi ini adalah mahasiswa, beberapa pelaku usaha kedai kopi kemudian melirik potensi tersebut dan memilih lokasi di dekat kawasan tinggal mahasiswa sebagai lokasi usaha kedai kopi mereka, salah satunya Kawasan Pogung. Peneliti berusaha memahami fenomena persebaran kedai kopi kemudian bertujuan untuk mengetahui bentuk konteks keruangan yang tercipta dari fenomena persebaran cafe atau coffeeshop di Kawasan Perkotaan Yogyakarta, serta untuk mengetahui apa saja faktor-faktor pemilihan suatu lokasi yang sesuai untuk pembangunan cafe atau coffeeshop di Kawasan Perkotaan Yogyakarta.
</Text>
            </View>
            <View style={styles.container}> 
            <Text> Stack:</Text>
            <Text> 1. React Native</Text>
            <Text> 2. HTML</Text>
            <Text> 3. LeafletJS</Text>
            <Text> 4. Google Sheets</Text>
            <Text> 5. App Script</Text>
            <Text> 6. FontAwesome5</Text>
            <Text> 7. Github</Text>
            </View>
        </ScrollView>
    );
    }
    function Map() {
    return (
        <WebView
            source={{ uri: webmap }}
          />
    );
    }
    function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput}}
          />
    );
    }
    function Profile() {
    return (
        <View>
            <Portofolio />
        </View>
    );
    
    }
    function Mahasiswascreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    );
    }
    function MyTabs() {
      return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="home" color={color} size={size} />
        ),
    }}
    />
          <Tab.Screen name="Map" component={Map} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
        ),
    }} />
          <Tab.Screen name="Add Data" component={AddDataScreen} options={{
        tabBarLabel: 'Add Data',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="plus-circle" color={color} size={size} />
        ),
    }} />
          <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-alt" color={color} size={size} />
        ),
    }} />
          <Tab.Screen name="Mahasiswa" component={Mahasiswascreen} options={{
        tabBarLabel: 'Mahasiswa',
        tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="users" color={color} size={size} />
        ),
    }} />
        </Tab.Navigator>
        </NavigationContainer>
      );
    }
    
    export default MyTabs;
    
    
    const styles = StyleSheet.create({
        image: {
            width: '100%',
            height: 200,
            resizeModel: 'strech'
        },
    
        listitems: {
            padding: 20,
            alignItems: 'center',
        },
    
        caption: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            textAlign:'center',
            marginTop: 20,
        },
        container: {
            marginTop:20,
            marginHorizontal: 20,
            padding: 20,
            backgroundColor: '#fff',
            color: 'white'
        },
        description: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign:'center',
            marginTop: 20,
        },
        tinyLogo: {
            alignItems: 'center',
            width: 100,
            height: 100,
          },
    });