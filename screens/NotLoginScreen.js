import React, {useState} from "react";
import {
    View,
    TextInput,
    Button, StyleSheet,
} from "react-native";

const NotLoginScreen = ({ route, navigation }) => {

    const [textData , setTextData] = useState("Wonderful User");

    return(
        <View>
        <TextInput
            style={styles.box}
            value={textData}
            onChangeText={(text) => {
                setTextData(text);
            }}
        />
        <Button title={"LogIn"} onPress={() => {
            navigation.navigate("Checkout Status",{username: textData})
        }}></Button>
        </View>
    )
}
export default NotLoginScreen;

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