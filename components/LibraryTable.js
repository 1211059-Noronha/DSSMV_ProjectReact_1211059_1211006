import React, {useContext, useEffect, useState} from "react";
import { URL_API, fetchLibrariesStarted, fetchLibraries } from '../context/Actions';
import AppContext from '../context/AppContext';
import {
    View,Text, StyleSheet,ScrollView,FlatList,
} from "react-native";

const LibraryTable = () => {



    const renderItem = ({item,index}) =>{
        return(
            <View style={styles.row}>
                <Text style={[styles.cell, {width:100}]}>{item.name}</Text>
                <Text style={[styles.cell, {width:300}]}>{item.address}</Text>
                <Text style={[styles.cell, {width:200}]}>{item.openDays}</Text>
                <Text style={[styles.cell, {width:200}]}>{item.openStatement}</Text>
                <Text style={[styles.cell, {width:80}]}>{item.open.toString()}</Text>
            </View>

        )
    }
    const { state, dispatch } = useContext(AppContext);
    const { libraries } = state;
    const { loading, error, data } = libraries;

    useEffect(() => {
        dispatch(fetchLibrariesStarted());
        const url = `${URL_API}/library`;
        const request = {};
        fetchLibraries(url, request, dispatch);

    },[]);


    if (loading === true) {
        return (
            <View style={styles.item}>
                <Text>Loading ....</Text>
            </View>
        );
    }
    else {
        console.log(error)
        if (error !== null) {
            return (
                <View style={styles.item}>
                    <Text>Error ....</Text>
                </View>
            );
        } else {
            if (data.length > 0) {
                console.log(data);
                return (
                    <View style={styles.container}>
                        <ScrollView horizontal>
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
                        <Text>No data ....</Text>
                    </View>
                );
            }
        }
    }
};

export default LibraryTable;

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
})