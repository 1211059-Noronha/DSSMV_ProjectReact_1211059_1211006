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

    const { bookId , username} = route.params;
    const handleHttpRequest = () => {

        axios.post(`${URL_API}/library/${username}/book/${bookId}`,{
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