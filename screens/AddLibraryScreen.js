
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



const AddLibraryScreen = ({route,navigation}) => {

    const { state, dispatch } = useContext(AppContext);
    const handleHttpRequest = () => {

        axios.post(`${URL_API}/library`,{
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
                    style={{fontSize: 20, fontWeight: 'bold'}}>Name</Text>
                <TextInput
                    onChangeText={(text) => {
                        setNameData(text);
                    }}
                    value={nameData}
                />
                <Text
                    style={{fontSize: 20, fontWeight: 'bold'}}>Address</Text>
                <TextInput
                    onChangeText={(text) => {
                        setAddressData(text);
                    }}
                    value={addressData}
                />
                <Text
                    style={{fontSize: 20, fontWeight: 'bold'}}>Open Day</Text>
                <Picker
                    selectedValue={selectedOpenDay}
                    onValueChange={(selectedOpenDay, itemIndex) =>
                        setSelectedOpenDay(selectedOpenDay)
                    }
                    value={selectedOpenDay}
                >
                    <Picker.Item label="Monday" value="Monday"/>
                    <Picker.Item label="Tuesday" value="Tuesday"/>
                    <Picker.Item label="Wednesday" value="Wednesday"/>
                    <Picker.Item label="Thursday" value="Thursday"/>
                    <Picker.Item label="Friday" value="Friday"/>
                    <Picker.Item label="Saturday" value="Saturday"/>
                    <Picker.Item label="Sunday" value="Sunday"/>
                </Picker>
                <Text
                    style={{fontSize: 20, fontWeight: 'bold'}}>Close Day</Text>
                <Picker
                    selectedValue={selectedCloseDay}
                    onValueChange={(selectedCloseDay, itemIndex) =>
                        setSelectedCloseDay(selectedCloseDay)
                    }
                    value={selectedCloseDay}
                >
                    <Picker.Item label="Monday" value="Monday"/>
                    <Picker.Item label="Tuesday" value="Tuesday"/>
                    <Picker.Item label="Wednesday" value="Wednesday"/>
                    <Picker.Item label="Thursday" value="Thursday"/>
                    <Picker.Item label="Friday" value="Friday"/>
                    <Picker.Item label="Saturday" value="Saturday"/>
                    <Picker.Item label="Sunday" value="Sunday"/>
                </Picker>
                <Text style={{fontWeight:'bold', fontSize:20}}>Open Time</Text>
                <DatePicker mode={"time"} onDateChange={setOpenTime}  date={openTime}/>
                <Text style={{fontWeight:'bold', fontSize:20}}>Close Time</Text>
                <DatePicker mode={"time"} onDateChange={setCloseTime}  date={closeTime}/>
                <Button onPress={handleHttpRequest} title="Submit"/>
            </ScrollView>
        </View>
    )
}
export default AddLibraryScreen;