
import {Picker} from '@react-native-picker/picker';
import {Button, ScrollView, Text, TextInput, View} from "react-native";
import * as React from "react";
import {useContext, useState} from "react";
import DatePicker from "react-native-date-picker";
import {
    fetchGetAllBooks,
    fetchGetAllBooksStarted, fetchPostLibrary,
    fetchPostLibraryFailure, fetchPostLibraryStarted,
    fetchPostLibrarySuccess,
    URL_API
} from "../context/Actions";
import AppContext from "../context/AppContext";
import axios from "axios";



const UpdateLibraryScreen = ({route,navigation}) => {

    const { libraryId } = route.params;

    const { state, dispatch } = useContext(AppContext);

    function insertString(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }

    function converToUUID(_uuid){
        _uuid = insertString(_uuid, 8, '-')
        _uuid = insertString(_uuid, 13, '-')
        _uuid = insertString(_uuid, 18, '-')
        _uuid = insertString(_uuid, 23, '-')

        return _uuid
    }


    const handleHttpRequest = () => {

        axios.put(encodeURI(`${URL_API}/library/${converToUUID(libraryId)}`),{
                address: addressData,
                closeTime : "20:00:00",
                name : nameData,
                openDays : "Monday To Friday",
                openTime : "09:00:00"
            },
            {headers: {
                    "Content-Type": "application/json"
                }}

        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const [nameData , setNameData] = useState("Insert Library Name");
    const [addressData , setAddressData] = useState("Insert Library Name");

    const [openTime,setOpenTime] = useState(new Date());
    const [closeTime,setCloseTime] = useState(new Date());


    const [selectedOpenDay, setSelectedOpenDay] = useState();
    const [selectedCloseDay, setSelectedCloseDay] = useState();


    return (
        <View>
            <ScrollView>
                <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: "#000000"}}>Name</Text>
                <TextInput
                    style={{color:"#000000"}}
                    onChangeText={(text) => {
                        setNameData(text);
                    }}
                    value={nameData}
                />
                <Text
                    style={{fontSize: 20, fontWeight: 'bold',color:"#000000"}}>Address</Text>
                <TextInput
                    style={{color:"#000000"}}
                    onChangeText={(text) => {
                        setAddressData(text);
                    }}
                    value={addressData}
                />
                <Text
                    style={{fontSize: 20, fontWeight: 'bold',color:"#000000"}}>Open Day</Text>
                <Picker
                    style={{color:"#000000"}}
                    selectedValue={selectedOpenDay}
                    onValueChange={(selectedOpenDay, itemIndex) =>
                        setSelectedOpenDay(selectedOpenDay)
                    }
                    value={selectedOpenDay}
                >
                    <Picker.Item label="Monday" value="Monday" style={{color:"#000000"}}/>
                    <Picker.Item label="Tuesday" value="Tuesday" style={{color:"#000000"}}/>
                    <Picker.Item label="Wednesday" value="Wednesday" style={{color:"#000000"}}/>
                    <Picker.Item label="Thursday" value="Thursday" style={{color:"#000000"}}/>
                    <Picker.Item label="Friday" value="Friday" style={{color:"#000000"}}/>
                    <Picker.Item label="Saturday" value="Saturday" style={{color:"#000000"}}/>
                    <Picker.Item label="Sunday" value="Sunday" style={{color:"#000000"}}/>
                </Picker>
                <Text
                    style={{fontSize: 20, fontWeight: 'bold',color:"#000000"}}>Close Day</Text>
                <Picker
                    style={{color:"#000000"}}
                    selectedValue={selectedCloseDay}
                    onValueChange={(selectedCloseDay, itemIndex) =>
                        setSelectedCloseDay(selectedCloseDay)
                    }
                    value={selectedCloseDay}
                >
                    <Picker.Item label="Monday" value="Monday" style={{color:"#000000"}}/>
                    <Picker.Item label="Tuesday" value="Tuesday" style={{color:"#000000"}}/>
                    <Picker.Item label="Wednesday" value="Wednesday" style={{color:"#000000"}}/>
                    <Picker.Item label="Thursday" value="Thursday" style={{color:"#000000"}}/>
                    <Picker.Item label="Friday" value="Friday" style={{color:"#000000"}}/>
                    <Picker.Item label="Saturday" value="Saturday" style={{color:"#000000"}}/>
                    <Picker.Item label="Sunday" value="Sunday" style={{color:"#000000"}}/>
                </Picker>
                <Text style={{fontWeight:'bold', fontSize:20,color:"#000000"}}>Open Time</Text>
                <DatePicker mode={"time"} onDateChange={setOpenTime}  date={openTime} style={{color:"#000000"}}/>
                <Text style={{fontWeight:'bold', fontSize:20,color:"#000000"}}>Close Time</Text>
                <DatePicker mode={"time"} onDateChange={setCloseTime}  date={closeTime} style={{color:"#000000"}}/>
                <Button onPress={handleHttpRequest} title="Submit" style={{color:"#000000"}}/>
            </ScrollView>
        </View>
    )
}
export default UpdateLibraryScreen;