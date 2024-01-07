import React, {useContext, useEffect, useState} from "react";
import { URL_API, fetchGetAllBooksStarted, fetchGetAllBooks } from '../context/Actions';
import AppContext from '../context/AppContext';
import {
    View,Text, StyleSheet,ScrollView,FlatList,
} from "react-native";


const BookScreen = ({route,navigation}) => {
    const { libraryId } = route.params;
    const renderItem = ({item,index}) =>{
        return(
            <View style={styles.row}>
                <Text style={[styles.cell, {width:200}]}>{item.book.title}</Text>
                <Text style={[styles.cell, {width:200}]}>{item.book.authors.name}</Text>
                <Text style={[styles.cell, {width:200}]}>{item.book.description}</Text>
                <Text style={[styles.cell, {width:200}]}>{item.book.publishDate}</Text>
                <Text style={[styles.cell, {width:200}]}>{item.book.isbn}</Text>
                <Text style={[styles.cell, {width:200}]}>{item.available}</Text>
            </View>
        )
    }
    const { state, dispatch } = useContext(AppContext);
    const { books } = state;
    const { loading, error, data } = books;

    useEffect(() => {
        dispatch(fetchGetAllBooksStarted());
        const url = `${URL_API}/library/`+libraryId+"/book";
        //const url = `${URL_API}/library/bb385aa2-866f-419b-85fd-202ecec8cfde/book`;
        const request = {};
        fetchGetAllBooks(url, request, dispatch);
    },[]);

    if (loading === true) {
        return (
            <View style={styles.item}>
                <Text>Loading Books</Text>
            </View>
        );
    }
    else {
        if (error !== null) {
            return (
                <View style={styles.item}>
                    <Text>Error</Text>
                </View>
            );
        } else {
            if (data.length > 0) {
                return (
                    <View style={styles.container}>
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
                                    renderItem={renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </ScrollView>
                    </View>
                );
            } else {
                return (
                    <View style={styles.item}>
                        <Text>There are no Books in this library</Text>
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
        borderBottomColor: "#e1e1e1"
    },
    headerText: {
        fontFamily: "Gill Sans",
        fontSize: 15,
        flex: 1,

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
    },
    item: {
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: "Gill Sans",
        fontSize: 30,
        flex: 1,
    }
})