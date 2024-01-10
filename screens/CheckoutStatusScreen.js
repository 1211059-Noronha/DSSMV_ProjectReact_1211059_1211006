import React, {useContext, useEffect, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList, TextInput, Button, SectionList, Alert,
} from "react-native";
import AppContext from "../context/AppContext";
import {
    URL_API,
    fetchGetAllCheckedOutBooksStarted,
    fetchGetAllCheckedOutBooks, fetchGetAllCheckOutHistoryBooksStarted, fetchGetAllCheckOutHistoryBooks,
} from "../context/Actions";
import Menu, {MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import axios from "axios";

const CheckoutStatusScreen = ({ route, navigation }) => {

    //Username
    const { username } = route.params;

    const { state, dispatch } = useContext(AppContext);
    const { checkedOutBooks , checkOutHistoryBooks } = state;
    const { loading, error, data } = checkedOutBooks;
    const { loading1, error1, data1 } = checkOutHistoryBooks;

    const [refreshing,setRefreshing] = useState(false)

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



    const handleRefresh = () => {
        dispatch(fetchGetAllCheckedOutBooksStarted());
        const url1 = `${URL_API}/user/checked-out?userId=`+username;
        const request1 = {};
        fetchGetAllCheckedOutBooks(url1, request1, dispatch);

        dispatch(fetchGetAllCheckOutHistoryBooksStarted());
        const url2 = `${URL_API}/user/checkout-history?userId=`+username;
        const request2 = {};
        fetchGetAllCheckOutHistoryBooks(url2, request2, dispatch);
    }


    useEffect(() => {

         function getAllCheckOut(){
            dispatch(fetchGetAllCheckedOutBooksStarted());
            const url1 = `${URL_API}/user/checked-out?userId=`+username;
            const request1 = {};
            fetchGetAllCheckedOutBooks(url1, request1, dispatch);
        }

         function getAllCheckOutHistory(){
            dispatch(fetchGetAllCheckOutHistoryBooksStarted());
            const url2 = `${URL_API}/user/checkout-history?userId=`+username;
            const request2 = {};
            fetchGetAllCheckOutHistoryBooks(url2, request2, dispatch);
        }

         getAllCheckOut();
         getAllCheckOutHistory();
    },[]);

    const DATA = {data , data1}

    console.log(data1)

    if (loading === true && loading1 === true) {
        return (
            <View style={styles.item}>
                <Text style={{color:"#000000"}}>Loading </Text>
            </View>
        );
    } else if (error !== null && error1 !== null) {
        return (
            <View style={styles.item}>
                <Text style={{color:"#000000"}}>Error</Text>
            </View>
        );
    } else if (data.length > 0 && data1.length > 0) {
        return (
            <View style={styles.container}>
                    <View style={styles.listContainer}>
                        <View style={styles.header}>
                            <Text style={[styles.headerText, { width: 200 }]}>Title</Text>
                            <Text style={[styles.headerText, { width: 200 }]}>ISBN</Text>
                            <Text style={[styles.headerText, { width: 200 }]}>Library</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({item , index}) => (
                                <Menu onSelect={value => Alert.alert(value)}>
                                    <MenuTrigger>
                                        <View style={styles.row}>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.book.title}</Text>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.book.isbn}</Text>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.libraryName}</Text>
                                        </View>
                                    </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value="Check In Book"  onSelect={()=> {
                                            axios.post(encodeURI(`${URL_API}/library/${converToUUID(item.libraryId)}/book/${item.book.isbn}/checkin?userId=${username}`)
                                            ).then(function (response) {
                                                console.log(response);
                                            }).catch(function (error) {
                                                console.log(error);
                                            });
                                        }} >
                                            <Text style={[styles.cell]}>Check In Book</Text>
                                        </MenuOption>
                                        <MenuOption value="Create Review"  onSelect={() => {
                                            navigation.navigate('AddReviewScreen', {bookId : item.book.isbn,username : username})}
                                        }>
                                            <Text style={[styles.cell]}>Create Review</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                        <View style={styles.header}>
                            <Text style={[styles.headerText, { width: 600 }]}></Text>
                        </View>
                        <View style={styles.header}>
                            <Text style={[styles.headerText, { width: 200 }]}>Title</Text>
                            <Text style={[styles.headerText, { width: 200 }]}>ISBN</Text>
                            <Text style={[styles.headerText, { width: 200 }]}>Library</Text>
                        </View>
                        <FlatList
                            data={data1}
                            renderItem={({item , index}) => (
                                <Menu onSelect={value => Alert.alert(value)}>
                                    <MenuTrigger>
                                        <View style={styles.row}>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.book.title}</Text>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.book.isbn}</Text>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.libraryName}</Text>
                                        </View>
                                    </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value="Create Review" onSelect={() => {
                                            navigation.navigate('AddReviewScreen', {bookId : item.book.isbn, username : username})}
                                        }>
                                            <Text style={[styles.cell]}>Create Review</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    </View>
            </View>
        );
    } else if(data.length > 0){
        return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <View style={styles.listContainer}>
                    <View style={styles.header}>
                        <Text style={[styles.headerText, { width: 200 }]}>Title</Text>
                        <Text style={[styles.headerText, { width: 200 }]}>ISBN</Text>
                        <Text style={[styles.headerText, { width: 200 }]}>Library</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <Menu onSelect={value => Alert.alert(value)}>
                                <MenuTrigger>
                                    <View style={styles.row}>
                                        <Text style={[styles.cell, { width: 200 }]}>{item.book.title}</Text>
                                        <Text style={[styles.cell, { width: 200 }]}>{item.book.isbn}</Text>
                                        <Text style={[styles.cell, { width: 200 }]}>{item.libraryName}</Text>
                                    </View>
                                </MenuTrigger>
                                <MenuOptions>
                                    <MenuOption value="Check In Book" onSelect={()=> {
                                        axios.post(encodeURI(`${URL_API}/library/${converToUUID(item.libraryId)}/book/${item.book.isbn}/checkin?userId=${username}`)
                                        ).then(function (response) {
                                            console.log(response);
                                        }).catch(function (error) {
                                            console.log(error);
                                        });

                                    }}>
                                        <Text style={[styles.cell]}>Check In Book</Text>
                                    </MenuOption>
                                    <MenuOption value="Create Review" onSelect={() => {
                                        navigation.navigate('AddReviewScreen', {bookId : item.book.isbn}, username)}
                                    }>
                                        <Text style={[styles.cell]}>Create Review</Text>
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
            <Text>No Books Were Checked In before</Text>
        </View>
        );
    } else if(data1.length > 0){
        return (
            <View style={styles.container}>
                <Text>No Books Are Checked Out</Text>
                <ScrollView horizontal>
                    <View style={styles.listContainer}>
                        <View style={styles.header}>
                            <Text style={[styles.headerText, { width: 200 }]}>Title</Text>
                            <Text style={[styles.headerText, { width: 200 }]}>ISBN</Text>
                            <Text style={[styles.headerText, { width: 200 }]}>Library</Text>
                        </View>
                        <FlatList
                            data={data1}
                            renderItem={({ item, index }) => (
                                <Menu onSelect={value => Alert.alert(value)}>
                                    <MenuTrigger>
                                        <View style={styles.row}>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.book.title}</Text>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.book.isbn}</Text>
                                            <Text style={[styles.cell, { width: 200 }]}>{item.libraryName}</Text>
                                        </View>
                                    </MenuTrigger>
                                    <MenuOptions>
                                        <MenuOption value="Create Review" onSelect={() => {
                                            navigation.navigate('AddReviewScreen', {bookId : item.book.isbn, username : username})}
                                        }>
                                            <Text style={[styles.cell]}>Create Review</Text>
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
    }
}



export default CheckoutStatusScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
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
        color : "#000000"
    },
    headerText: {
        fontFamily: "Gill Sans",
        fontSize: 15,
        flex: 1,
        color: "#000000"
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
        color: "#000000"
    },
    item: {
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: "Gill Sans",
        fontSize: 30,
        flex: 1,
    }
})
