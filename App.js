import React, {Component, useState} from 'react';
import {View, StyleSheet, Image, StatusBar, Button, TextInput} from 'react-native';
import LogInScreen from './src/screens/LoginScreen';

const API = "http://193.136.62.24/v1/"
const loginName = 'Log in';



export default function App() {
    let [libraryUUID, setLibraryUUID] = useState("")
    let [libraryName, setLibraryName] = useState("")
    let [libraryAddress, setLibraryAddress] = useState("")
    let [libraryOpen, setLibraryOpen] = useState("")
    let [libraryClose, setLibraryClose] = useState("")
    let [libraryOpenTime, setLibraryOpenTime] = useState("")
    let [libraryCloseTime, setLibraryCloseTime] = useState("")

    let getLibraries = () => {
        fetch(API + "library")
            .then(res =>{
                console.log(res.status)
                console.log(res.headers)
                return res.json();
            })
            .then((result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    };

    let deleteLibrary = (UUID) => {
        fetch(API + `library/${UUID}`,{
            method: "DELETE"
        })
            .then(res =>{
                console.log(res.status)
                console.log(res.headers)
                return res.json();
            })
            .then((result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    };

    let postLibrary = (libraryName,libraryAddress,libraryOpen,libraryClose,libraryOpenTime, libraryCloseTime) => {

        let data = new FormData();
        data.append("address", libraryAddress);
        data.append("closeTime", libraryCloseTime);
        data.append("name", libraryName);
        data.append("openDays", libraryOpen+" to "+libraryClose);
        data.append("openTime", libraryOpenTime);

        fetch(API + `library`,{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address: libraryAddress.toString(),
                closeTime: libraryCloseTime.toString(),
                name: libraryName.toString(),
                openDays: libraryOpen.toString()+" to "+libraryClose.toString(),
                openTime: libraryOpenTime.toString()
            })
            /*
            JSON.stringify({
                address: libraryAddress,
                closeTime: libraryCloseTime,
                name: libraryName,
                openDays: libraryOpen+" to "+libraryClose,
                openTime: libraryOpenTime
            })
             */

        })
            .then(res =>{
                console.log(res.status)
                console.log(res.headers)
                return res.json();
            })
            .then((result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    };
    let putLibrary = (libraryName,libraryAddress,libraryOpen,libraryClose,libraryOpenTime, libraryCloseTime) => {
        fetch(API + `library/${UUID}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address: libraryAddress,
                closeTime: libraryCloseTime,
                name: libraryName,
                openDays: libraryOpen+" to "+libraryClose,
                openTime: libraryOpenTime
            })
        })

            .then(res =>{
                console.log(res.status)
                console.log(res.headers)
                return res.json();
            })
            .then((result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    };
    /*
      Cyclical error that i dont know how to fix to be honest

            Old
            <TextInput placeholder='Library Name' style={styles.input} value={libraryName} onChangeText={(value) => setLibraryName(value)}></TextInput>
            <TextInput placeholder='Library Address' style={styles.input} value={libraryAddress} onChangeText={(value) => setLibraryAddress(value)}></TextInput>
            <TextInput placeholder='Library Open Day' style={styles.input} value={libraryOpen} onChangeText={(value) => setLibraryOpen(value)}></TextInput>
            <TextInput placeholder='Library Close Day' style={styles.input} value={libraryClose} onChangeText={(value) => setLibraryClose(value)}></TextInput>
            <TextInput placeholder='Library Open Time' style={styles.input} value={libraryOpenTime} onChangeText={(value) => setLibraryOpenTime(value)}></TextInput>
            <TextInput placeholder='Library Close Time' style={styles.input} value={libraryCloseTime} onChangeText={(value) => setLibraryCloseTime(value)}></TextInput>

            New
            <TextInput placeholder='Library Name' style={styles.input} value={libraryName} onChangeText={setLibraryName}></TextInput>
            <TextInput placeholder='Library Address' style={styles.input} value={libraryAddress} onChangeText={setLibraryAddress}></TextInput>
            <TextInput placeholder='Library Open Day' style={styles.input} value={libraryOpen} onChangeText={setLibraryOpen}></TextInput>
            <TextInput placeholder='Library Close Day' style={styles.input} value={libraryClose} onChangeText={setLibraryClose}></TextInput>
            <TextInput placeholder='Library Open Time' style={styles.input} value={libraryOpenTime} onChangeText={setLibraryOpenTime}></TextInput>
            <TextInput placeholder='Library Close Time' style={styles.input} value={libraryCloseTime} onChangeText={setLibraryCloseTime}></TextInput>

    */
    return (


        <NavigationContainer>

            <TextInput placeholder='Library UUID' style={styles.input} value={libraryUUID}
                       onChangeText={(value) => setLibraryUUID(value)}></TextInput>
            <TextInput placeholder='Library Name' style={styles.input} value={libraryName}
                       onChangeText={(value) => setLibraryName(value)}></TextInput>
            <TextInput placeholder='Library Address' style={styles.input} value={libraryAddress}
                       onChangeText={(value) => setLibraryAddress(value)}></TextInput>
            <TextInput placeholder='Library Open Day' style={styles.input} value={libraryOpen}
                       onChangeText={(value) => setLibraryOpen(value)}></TextInput>
            <TextInput placeholder='Library Close Day' style={styles.input} value={libraryClose}
                       onChangeText={(value) => setLibraryClose(value)}></TextInput>
            <TextInput placeholder='Library Open Time' style={styles.input} value={libraryOpenTime}
                       onChangeText={(value) => setLibraryOpenTime(value)}></TextInput>
            <TextInput placeholder='Library Close Time' style={styles.input} value={libraryCloseTime}
                       onChangeText={(value) => setLibraryCloseTime(value)}></TextInput>

            <Button title="Get All" onPress={getLibraries}></Button>
            <Button title="Post" onPress={postLibrary}></Button>
            <Button title="Put" onPress={() => putLibrary(UUID)}></Button>
            <Button title="Delete" onPress={() => deleteLibrary(UUID)}></Button>
            <StatusBar style="auto"></StatusBar>
            <Tab.Screen
                style={styles.root}
                name={loginName}
                component={LogInScreen}
                options={{
                    tabBarLabel: 'Log in',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="login" color={color} size={size}/>
                    ),
                }}/>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center'
    },
    input: {
        alignSelf: "stretch",
        margin: 8,
        padding: 4
    }

})


/*
Mais tarde vou fazer compartimentalização mas por agora quero ter certeza que tenho requests a fazer

export default function App(){
    return (
        <NavigationContainer>
                <Tab.Screen
                    //style={styles.root}
                    name={loginName}
                    component={LogInScreen}
                    options={{
                        tabBarLabel: 'Log in',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="login" color={color} size={size} />
                        ),
                    }}
                />
}
 */
