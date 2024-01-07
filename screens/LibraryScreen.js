import React, {useContext, useEffect, useState} from "react";
import { URL_API, fetchGetAllLibrariesStarted, fetchGetAllLibraries } from '../context/Actions';
import AppContext from '../context/AppContext';
import BookScreen from "./BookScreen";
import {
    View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity,
} from "react-native";

const LibraryScreen = ({navigation}) => {

    const renderItem = ({item,index}) =>{
        return(
            <TouchableOpacity onPress={() => {
                navigation.navigate('BookScreen',{libraryId: item.id})
            }}>
                <View style={styles.row}>
                    <Text style={[styles.cell, {width:100}]}>{item.name}</Text>
                    <Text style={[styles.cell, {width:300}]}>{item.address}</Text>
                    <Text style={[styles.cell, {width:200}]}>{item.openDays}</Text>
                    <Text style={[styles.cell, {width:200}]}>{item.openStatement}</Text>
                    <Text style={[styles.cell, {width:80}]}>{item.open.toString()}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const { state, dispatch } = useContext(AppContext);
    const { libraries } = state;
    const { loading, error, data } = libraries;

    useEffect(() => {
        dispatch(fetchGetAllLibrariesStarted());
        const url = `${URL_API}/library`;
        const request = {};
        fetchGetAllLibraries(url, request, dispatch);
    },[]);

    if (loading === true) {
        return (
            <View style={styles.item}>
                <Text>Loading Libraries</Text>
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
                        <ScrollView horizontal >
                            <View style={styles.listContainer}>
                                <View style={styles.header}>
                                    <Text style={[styles.headerText, {width: 100,}]}>Name</Text>
                                    <Text style={[styles.headerText, {width: 300,}]}>Address</Text>
                                    <Text style={[styles.headerText, {width: 200,}]}>Open Days</Text>
                                    <Text style={[styles.headerText, {width: 200,}]}>Open Statement</Text>
                                    <Text style={[styles.headerText, {width: 80,}]}>Open</Text>
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
                        <Text>There isn't a single library</Text>
                    </View>
                );
            }
        }
    }
};

export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 30,
        paddingHorizontal: 20,
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