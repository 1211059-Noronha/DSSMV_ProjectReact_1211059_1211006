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



const AddReviewScreen = ({route,navigation}) => {

    //i didnt send the username,but used the variable cause i just have the swag

    const { bookId , username} = route.params;

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

        axios.post(encodeURI(`${URL_API}/library/${converToUUID(username)}/book/${bookId}`),{
                stock: "5"
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

    const [stock , setStock] = useState("Insert Stock");

    const [selectedRecommended, setSelectedRecommended] = useState();


    return (
        <View>
            <ScrollView>
                <Text
                    style={{fontSize: 20, fontWeight: 'bold'}}>Review</Text>
                <TextInput
                    onChangeText={(text) => {
                        setStock(parseInt(text));
                    }}
                    value={parseInt(stock)}
                />
                <Button onPress={handleHttpRequest} title="Submit"/>
            </ScrollView>
        </View>
    )
}
export default AddReviewScreen;