import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppContext from "../context/AppContext";
import {
  URL_API,
  fetchGetAllBooksStarted,
  fetchGetAllBooks,
  fetchCheckoutBook,
} from "../context/Actions";

const BookCheckoutScreen = ({ route, navigation }) => {
  const { libraryId } = route.params;

  const renderItem = ({ item, index }) => {
    const handleCheckout = () => {
      Alert.alert("Checkout", `Do you want to check out ${item.book.title}?`, [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Checkout",
          onPress: () => handleCheckoutConfirmed(item),
        },
      ]);
    };

    const handleCheckoutConfirmed = (book) => {

      const checkoutUrl = `${URL_API}/library/${libraryId}/book/${book.book.id}/checkout`;
      const checkoutRequest = {}; // Add any additional data needed for checkout
      fetchCheckoutBook(checkoutUrl, checkoutRequest, dispatch);
    };

    return (
      <View style={styles.row}>
      <Text style={[styles.cell, { width: 200 }]}>{item.book.title}</Text>
    <Text style={[styles.cell, { width: 200 }]}>{item.book.authors.name}</Text>
    <Text style={[styles.cell, { width: 200 }]}>{item.book.description}</Text>
    <Text style={[styles.cell, { width: 200 }]}>{item.book.publishDate}</Text>
    <Text style={[styles.cell, { width: 200 }]}>{item.book.isbn}</Text>
    <Text style={[styles.cell, { width: 200 }]}>{item.available}</Text>
    <TouchableOpacity onPress={handleCheckout}>
      <Text style={[styles.cell, { width: 200, color: "blue" }]}>Checkout</Text>
    </TouchableOpacity>
    </View>
  );
  };

  const { state, dispatch } = useContext(AppContext);
  const { books } = state;
  const { loading, error, data } = books;

  useEffect(() => {
    dispatch(fetchGetAllBooksStarted());
    const url = `${URL_API}/library/` + libraryId + "/book";
    fetchGetAllBooks(url, {}, dispatch);
  }, []);

  if (loading === true) {
    return (
      <View style={styles.item}>
      <Text>Loading Books</Text>
    </View>
  );
  } else {
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
          <Text style={[styles.headerText, { width: 200 }]}>Name</Text>
        <Text style={[styles.headerText, { width: 200 }]}>Author</Text>
        <Text style={[styles.headerText, { width: 200 }]}>Description</Text>
        <Text style={[styles.headerText, { width: 200 }]}>Published Date</Text>
        <Text style={[styles.headerText, { width: 200 }]}>isbn</Text>
        <Text style={[styles.headerText, { width: 200 }]}>Available Books</Text>
        <Text style={[styles.headerText, { width: 200 }]}>Actions</Text>
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

export default BookCheckoutScreen;

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
