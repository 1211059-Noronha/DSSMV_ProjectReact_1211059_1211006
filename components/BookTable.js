import React, {useContext, useEffect, useState} from "react";
import { URL_API, fetchBooksStarted, fetchBooks } from '../context/Actions';
import AppContext from '../context/AppContext';
import {
  View,Text, StyleSheet,ScrollView,FlatList,
} from "react-native";

const BookTable = () => {
  const renderItem = ({item,index}) =>{
    return(
      <View style={styles.row}>
        <Text style={[styles.cell, {width:100}]}>{item.byStatement.toString()}</Text>
        <Text style={[styles.cell, {width:300}]}>{item.description.toString()}</Text>
        <Text style={[styles.cell, {width:200}]}>{item.isbn.toString()}</Text>
        <Text style={[styles.cell, {width:200}]}>{item.numberOfPages}</Text>
        <Text style={[styles.cell, {width:80}]}>{item.publishDate.toString()}</Text>
        <Text style={[styles.cell, {width:200}]}>{item.subjectPeople.Array()}</Text>
        <Text style={[styles.cell, {width:200}]}>{item.subjectPlaces.Array()}</Text>
        <Text style={[styles.cell, {width:200}]}>{item.subject.Array()}</Text>
        <Text style={[styles.cell, {width:80}]}>{item.title.toString()}</Text>
        <Text style={[styles.cell, {width:300}]}>{item.stock}</Text>
        <Text style={[styles.cell, {width:200}]}>{item.available}</Text>
      </View>

    )
  }
  const { state, dispatch } = useContext(AppContext);
  const { books } = state;
  const { loading, error, data } = books;

  useEffect(() => {
    dispatch(fetchBooksStarted());
    const url = `${URL_API}/book`;
    const request = {};
    fetchBooks(url, request, dispatch);

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
                  <Text style={[styles.headerText, {width: 100,}]}>By Statement</Text>
                  <Text style={[styles.headerText, {width: 300,}]}>Description</Text>
                  <Text style={[styles.headerText, {width: 200,}]}>Isbn</Text>
                  <Text style={[styles.headerText, {width: 200,}]}>Number Of Pages</Text>
                  <Text style={[styles.headerText, {width: 80,}]}>Publish Date</Text>
                  <Text style={[styles.headerText, {width: 200,}]}>Subject People</Text>
                  <Text style={[styles.headerText, {width: 200,}]}>Subject Places</Text>
                  <Text style={[styles.headerText, {width: 200,}]}>Subject</Text>
                  <Text style={[styles.headerText, {width: 80,}]}>Title</Text>
                  <Text style={[styles.headerText, {width: 300,}]}>Stock</Text>
                  <Text style={[styles.headerText, {width: 200,}]}>Available</Text>

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

export default BookTable;

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
