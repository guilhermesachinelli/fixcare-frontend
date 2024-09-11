import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    div: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "red",
        height: 100,
        borderRadius: 25,
        margin: 10,
        
    },
    title: {
        fontSize: 23,
        color: "white",
        fontFamily: "Roboto",
        fontWeight: "bold",
    },
    image: {
        width: 180,
        height: 46,
    }
    });

export default styles;