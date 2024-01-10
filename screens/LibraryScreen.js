import React, {useContext, useEffect, useState} from "react";
import {
    URL_API,
    fetchGetAllLibrariesStarted,
    fetchGetAllLibraries,
} from '../context/Actions';
import AppContext from '../context/AppContext';
import {
    View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Alert,
} from "react-native";
import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers,
} from 'react-native-popup-menu';

const LibraryScreen = ({navigation}) => {

    const { state, dispatch } = useContext(AppContext);
    const { libraries } = state;
    const { loading, error, data } = libraries;

    const [refreshing,setRefreshing] = useState(false)

    const handleRefresh = () => {
        setRefreshing(true)

        dispatch(fetchGetAllLibrariesStarted());
        const url = `${URL_API}/library`;
        const request = {};
        fetchGetAllLibraries(url, request, dispatch);

        setRefreshing(false)
    }

    useEffect(() => {
        dispatch(fetchGetAllLibrariesStarted());
        const url = `${URL_API}/library`;
        const request = {};
        fetchGetAllLibraries(url, request, dispatch);
    },[]);

    if (loading === true) {
        return (
            <View style={styles.item}>
                <Text style={{color:"#000000"}}>Loading Libraries</Text>
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
                                    renderItem={({item,index}) => (
                                        <Menu onSelect={value => Alert.alert(value)}>
                                            <MenuTrigger>
                                                    <View style={styles.row}>
                                                        <Text style={[styles.cell, {width:100}]}>{item.name}</Text>
                                                        <Text style={[styles.cell, {width:300}]}>{item.address}</Text>
                                                        <Text style={[styles.cell, {width:200}]}>{item.openDays}</Text>
                                                        <Text style={[styles.cell, {width:200}]}>{item.openStatement}</Text>
                                                        <Text style={[styles.cell, {width:80}]}>{item.open.toString()}</Text>
                                                    </View>
                                            </MenuTrigger>
                                            <MenuOptions>
                                                <MenuOption value="Add Library" onSelect={() => navigation.navigate('AddLibraryScreen')} >
                                                    <Text style={[styles.cell]}>Add Library</Text>
                                                </MenuOption>
                                                <MenuOption value="Edit Library" onSelect={() => navigation.navigate('UpdateLibraryScreen',{libraryId: item.id})} >
                                                    <Text style={[styles.cell]}>Edit Library</Text>
                                                </MenuOption>
                                                <MenuOption value="Delete Library"  onSelect={() => {
                                                        navigation.navigate('DeleteLibrary',{libraryId: item.id})
                                                    }
                                                }>
                                                    <Text style={[styles.cell]}>Delete Library</Text>
                                                </MenuOption>
                                                <MenuOption value="Book From Library" onSelect={() => navigation.navigate('BookScreen',{libraryId: item.id})}>
                                                    <Text style={[styles.cell]}>Books From This Library</Text>
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
                        <Text style={{color:"#000000"}}>There isn't a single library</Text>
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
        borderBottomColor: "#000000",
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
        color:"#000000"
    },
    item: {
        justifyContent: 'center',
        alignItems: "center",
        fontFamily: "Gill Sans",
        fontSize: 30,
        flex: 1,
        color: "#000000"
    },
    triggerText: {
        color: 'black',
    },
    text: {
        fontSize: 18,
        color: "#000000"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    }
})