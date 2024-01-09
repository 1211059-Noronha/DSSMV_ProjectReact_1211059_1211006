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
        console.log(reviewData)
        console.log(route.params)
        axios.post(encodeURI(`${URL_API}/book/${bookId}/review?userId=${username}`),{
                recommended: selectedRecommended,
                review : reviewData,
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

    const [reviewData , setReviewData] = useState("Insert Review");

    const [selectedRecommended, setSelectedRecommended] = useState();


    return (
        <View>
            <ScrollView>
                <Text
                    style={{fontSize: 20, fontWeight: 'bold'}}>Do you Recommend?</Text>
                <Picker
                    selectedValue={selectedRecommended}
                    onValueChange={(selectedRecommended, itemIndex) =>
                        setSelectedRecommended(selectedRecommended)
                    }
                    value={selectedRecommended}
                >
                    <Picker.Item label="Yes" value={false}/>
                    <Picker.Item label="No" value={false}/>
                </Picker>
                <Text
                    style={{fontSize: 20, fontWeight: 'bold'}}>Review</Text>
                <TextInput
                    onChangeText={(text) => {
                        setReviewData(text);
                    }}
                    value={reviewData}
                />
                <Button onPress={handleHttpRequest} title="Submit"/>
            </ScrollView>
        </View>
    )
}
export default AddReviewScreen;