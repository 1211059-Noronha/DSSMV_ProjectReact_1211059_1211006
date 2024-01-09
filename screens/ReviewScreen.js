import React, {useContext, useEffect, useState} from "react";
import {
    URL_API,
    fetchGetAllReviewsStarted,
    fetchGetAllReviews
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

const ReviewScreen = ({route,navigation}) => {
    const { bookId , username} = route.params;

    const { state, dispatch } = useContext(AppContext);
    const { reviews } = state;
    const { loading, error, data } = reviews;

    const [refreshing,setRefreshing] = useState(false)


        const handleRefresh = () => {
            dispatch(fetchGetAllReviewsStarted());
            const url = `${URL_API}/book/`+bookId+"/review";
            const request = {};
            console.log(url)
            fetchGetAllReviews(url, request, dispatch);
        }

        //Get All
        useEffect(() => {
            dispatch(fetchGetAllReviewsStarted());
            const url = `${URL_API}/book/`+bookId+"/review";
            const request = {};
            console.log(url)
            fetchGetAllReviews(url, request, dispatch);
        },[]);

        if (loading === true) {
            return (
                <View style={styles.item}>
                    <Text>Loading Reviews</Text>
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
                                        <Text style={[styles.headerText, {width: 200,}]}>Reviewer</Text>
                                        <Text style={[styles.headerText, {width: 200,}]}>Recommended</Text>
                                        <Text style={[styles.headerText, {width: 500,}]}>Review</Text>
                                    </View>
                                        <FlatList
                                            data={data}
                                            renderItem={({item,index}) => (
                                                <Menu onSelect={value => Alert.alert(value)}>
                                                    <MenuTrigger>
                                                        <View style={styles.row}>
                                                            <Text style={[styles.cell, {width:200}]}>{item.reviewer}</Text>
                                                            <Text style={[styles.cell, {width:200}]}>{item.recommended.toString()}</Text>
                                                            <Text style={[styles.cell, {width:500}]}>{item.review}</Text>
                                                        </View>
                                                    </MenuTrigger>
                                                    <MenuOptions>
                                                        <MenuOption value="Update Review" text="Update Review (Not Implemented :( )" />
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
                            <Text>There isn't a single review lmao</Text>
                        </View>
                    );
                }
            }
        }




};

export default ReviewScreen;

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