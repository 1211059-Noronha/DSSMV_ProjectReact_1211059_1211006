import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import AppContext from "../context/AppContext";
import {
  URL_API,
  fetchGetAllCheckedOutBooksStarted,
  fetchGetAllCheckedOutBooks,
} from "../context/Actions";

const CheckedOutBooksScreen = ({ route, navigation }) => {
  const { libraryId } = route.params;

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
    <Text style={[styles.cell, { width: 200 }]}>{item.book.title}</Text>
  <Text style={[styles.cell, { width: 200 }]}>{item.book.authors.name}</Text>
  <Text style={[styles.cell, { width: 200 }]}>{item.book.description}</Text>
  <Text style={[styles.cell, { width: 200 }]}>{item.book.publishDate}</Text>
  <Text style={[styles.cell, { width: 200 }]}>{item.book.isbn}</Text>
  <Text style={[styles.cell, { width: 200 }]}>{item.available}</Text>
  </View>
);

  const { state, dispatch } = useContext(AppContext);
  const { checkedOutBooks } = state;
  const { loading, error, data } = checkedOutBooks;

  useEffect(() => {
    dispatch(fetchGetAllCheckedOutBooksStarted());
    const url = `${URL_API}/library/${libraryId}/checked-out-books`;
    fetchGetAllCheckedOutBooks(url, {}, dispatch);
  }, []);

  if (loading) {
    return (
      <View style={styles.item}>
      <Text>Loading Checked Out Books</Text>
    </View>
  );
  } else if (error) {
    return (
      <View style={styles.item}>
      <Text>Error</Text>
      </View>
  );
  } else if (data.length > 0) {
    return (
      <View style={styles.container}>
      <ScrollView horizontal>
    <View style={styles.listContainer}>
      <View style={styles.header}>
      <Text style={[styles.headerText, { width: 200 }]}>Name</Text>
    <Text style={[styles.headerText, { width: 200 }]}>Author</Text>
    <Text style={[styles.headerText, { width: 200 }]}>Description</Text>
    <Text style={[styles.headerText, { width: 200 }]}>Published Date</Text>
    <Text style={[styles.headerText, { width: 200 }]}>ISBN</Text>
    <Text style={[styles.headerText, { width: 200 }]}>Available</Text>
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
      <Text>No Books Checked Out in this library</Text>
    </View>
  );
  }
};

export default CheckedOutBooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  headerText: {
    fontFamily: "Gill Sans",
    fontSize: 15,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Gill Sans",
    fontSize: 30,
    flex: 1,
  },
});
