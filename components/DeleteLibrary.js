import React, {useContext, useEffect} from "react";
import {
    fetchDeleteLibrary,
    fetchDeleteLibraryStarted,
    fetchGetAllLibraries,
    fetchGetAllLibrariesStarted,
    URL_API
} from "../context/Actions";
import AppContext from "../context/AppContext";
import {StyleSheet, Text, View} from "react-native";

const DeleteLibrary = ({route,navigation}) => {

    const {state, dispatch} = useContext(AppContext);
    const {libraries} = state;
    const {loading, error, data} = libraries;

    const { libraryId } = route.params;

    useEffect(() => {
        dispatch(fetchDeleteLibraryStarted());
        const url = `${URL_API}/library/`+libraryId;
        const request = {method: "DELETE"};
        fetchDeleteLibrary(url, request, dispatch);
    }, []);


    if (loading === true) {
        return (
            <View style={styles.item}>
                <Text>Deleting Library</Text>
            </View>
        );
    } else {
        console.log(error)
        if (error !== null) {
            return (
                <View style={styles.item}>
                    <Text>Error</Text>
                </View>
            );
        } else {
            return(
                <View style={styles.item}>
                    <Text
                        onPress={()=> {
                            navigation.pop();
                        }}>
                        Deleted Library With Success</Text>
                </View>
            )
        }
    }
}

export default DeleteLibrary;

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
    },
    triggerText: {
        color: 'black',
    },
    text: {
        fontSize: 18,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    }
})