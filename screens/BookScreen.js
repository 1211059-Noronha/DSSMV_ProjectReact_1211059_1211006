import React, {useContext, useEffect, useState} from "react";
import { URL_API, fetchGetAllBooksStarted, fetchGetAllBooks } from '../context/Actions';
import AppContext from '../context/AppContext';
import {
    View, Text, StyleSheet, ScrollView, FlatList, TextInput, Alert
} from "react-native";
import Menu, {MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";
import axios from "axios";



const BookScreen = ({route,navigation}) => {

    //Library Selected from LibraryScreen
    const { libraryId } = route.params;

    const { state, dispatch } = useContext(AppContext);
    const { books } = state;
    const { loading, error, data } = books;

    const [textData , setTextData] = useState("Insert Username");

    const [refreshing,setRefreshing] = useState(false)

    const handleRefresh = () => {
        setRefreshing(true)

        dispatch(fetchGetAllBooksStarted());
        const url = `http://193.136.62.24/v1/library/`+libraryId+"/book";
        const request = {};
        fetchGetAllBooks(url, request, dispatch);

        setRefreshing(false)
    }

    useEffect(() => {
        dispatch(fetchGetAllBooksStarted());
        const url = `${URL_API}/library/`+libraryId+"/book";
        const request = {};
        fetchGetAllBooks(url, request, dispatch);
    },[]);

    if (loading === true) {
        return (
            <View style={styles.item}>
                <Text style={{color:"#000000"}}>Loading Books</Text>
            </View>
        );
    }
    else {
        if (error !== null) {
            return (
                <View style={styles.item}>
                    <Text style={{color:"#000000"}}>Error</Text>
                </View>
            );
        } else {
            if (data.length > 0) {
                return (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.box}
                            value={textData}
                            onChangeText={(text) => {
                                setTextData(text);
                            }}
                        />
                        <ScrollView horizontal>
                            <View style={styles.listContainer}>
                                <View style={styles.header}>
                                    <Text style={[styles.headerText, {width: 200,}]}>Name</Text>
                                    <Text style={[styles.headerText, {width: 200,}]}>Author</Text>
                                    <Text style={[styles.headerText, {width: 200,}]}>Description</Text>
                                    <Text style={[styles.headerText, {width: 200,}]}>Published Date</Text>
                                    <Text style={[styles.headerText, {width: 200,}]}>isbn</Text>
                                    <Text style={[styles.headerText, {width: 200,}]}>Available Books</Text>
                                </View>
                                    <FlatList
                                        data={data}
                                        renderItem={({item,index}) => (
                                            <Menu onSelect={value => Alert.alert(value)}>
                                                <MenuTrigger>
                                                    <View style={styles.row}>
                                                        <Text style={[styles.cell, {width:200}]}>{item.book.title}</Text>
                                                        <Text style={[styles.cell, {width:200}]}>{item.book.authors.name}</Text>
                                                        <Text style={[styles.cell, {width:200}]}>{item.book.description}</Text>
                                                        <Text style={[styles.cell, {width:200}]}>{item.book.publishDate}</Text>
                                                        <Text style={[styles.cell, {width:200}]}>{item.book.isbn}</Text>
                                                        <Text style={[styles.cell, {width:200}]}>{item.available}</Text>
                                                    </View>
                                                </MenuTrigger>
                                                <MenuOptions>
                                                    <MenuOption value="Check In Book" onSelect={()=> {
                                                        axios.post(`${URL_API}/library/${libraryId}/book/${item.book.isbn}}/checkout?userId=${this.username}`
                                                        ).then(function (response) {
                                                            console.log(response);
                                                        }).catch(function (error) {
                                                            console.log(error);
                                                        });
                                                    }} >
                                                        <Text style={[styles.cell]}>Check In Book</Text>
                                                    </MenuOption>
                                                    <MenuOption value="Get All Reviews" onSelect={() => navigation.navigate('ReviewScreen',{bookId: item.book.isbn, username : "you will never guess what is here so yeah"})}>
                                                        <Text style={[styles.cell]}>Get All Reviews</Text>
                                                    </MenuOption>
                                                    <MenuOption value="Edit Book Quantity" onSelect={() => navigation.navigate('EditBookQuantityScreen',{bookId: item.book.isbn, username : libraryId})}>
                                                        <Text style={[styles.cell]}>Edit Book Quantity</Text>
                                                    </MenuOption>
                                                </MenuOptions>
                                            </Menu>
                                        )}
                                        keyExtractor={(item, index) => index.toString()}
                                        refreshing={refreshing}
                                        onRefresh={handleRefresh}
                                    />
                            </View>
                        </ScrollView>
                    </View>
                );
            } else {
                return (
                    <View style={styles.item}>
                        <Text style={{color:"#000000"}}>There are no Books in this library</Text>
                    </View>
                );
            }
        }
    }
};

export default BookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    listContainer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
    },
    headerText: {
        fontFamily: "Gill Sans",
        fontSize: 15,
        flex: 1,
        color: '#000000'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 1,
        elevation: 1,
        borderRadius: 3,
        paddingVertical: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 6,
    },
    cell: {
        fontFamily: "Gill Sans",
        fontSize: 14,
        flex: 1,
        color: '#000000'
    },
    item: {
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: "Gill Sans",
        fontSize: 30,
        flex: 1,
        color: '#000000'
    },
    box: {
        color: '#000000'
    }
})