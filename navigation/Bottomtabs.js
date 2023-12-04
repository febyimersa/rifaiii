import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import WebView from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Getdata from '../Getdata';
import Createdata from '../Createdata';
// import Editdata from '../Editdata';

const Tab = createBottomTabNavigator();
const webmap = require('../peta/map.html');

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Map</Text>
        <View>
            <View style = {styles.listitems}>
                <Image source = {require('../peta/peta.png')} style ={styles.image}/>
                <Text style={styles.caption}>Peta Penggunaan Lahan Mangrove</Text>
            </View>
            <View style = {styles.listitems}>
                <Image source = {require('../peta/peta.png')} style ={styles.image}/>
                <Text style={styles.caption}>Peta Geomorfologi Pulau Panggang</Text>
            </View>
            <View style = {styles.listitems}>
                <Image source = {require('../peta/peta.png')} style ={styles.image}/>
                <Text style={styles.caption}>Peta Tingkat Emisi di Seluruh Dunia</Text>
            </View>
        </View>
        </ScrollView>
    )
}
function MapScreen() {
    return (
        <WebView source={webmap }
        />
    )
}
function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    )
    
}
function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    )
}
function GetData () {
    return (<Getdata />)
    }
    function CreateData () {
    return (<Createdata />)
    }
    // function EditData () {
    // return (<Editdata />)
    // }
function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}  >
            {/* <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                      <Fontawesome5 name="home" color={color} size={size} />
                ),
            }}            
            />
            <Tab.Screen name="Map" component={MapScreen}
            options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color, size }) => (
                      <Fontawesome5 name="map-marked" color={color} size={size} />
                ),
            }}   
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size }) => (
                      <Fontawesome5 name="user" color={color} size={size} />
                ),
            }}   
            />
            <Tab.Screen name="Mahasiswa" component={MahasiswaScreen}
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size }) => (
                      <Fontawesome5 name="users" color={color} size={size} />
                ),
            }}  */}
              <Tab.Screen name="Database" component={GetData}
      options={{
        tabBarLabel: 'Database',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="database" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Add Data" component={CreateData}
      options={{
        tabBarLabel: 'Add Data',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="plus-circle" color={color} size={size} />
        ),
      }} />
      {/* <Tab.Screen name="Edit Data" component={""}
      options={{
        tabBarLabel: 'Edit Data',
        tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="pencil-alt" color={color} size={size} />
        ),
      }} /> */}
           
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1
    },
    caption: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    }
    }
)