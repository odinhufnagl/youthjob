import { StyleSheet } from "react-native";
import colors from "../../colors";
import fonts from "../../fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        alignItems: "center",
        paddingTop: 30,

    },

    headerName: {
        fontFamily: fonts[600],
        color: "white",
        fontSize: 20
    },
    headerAge: {
        fontFamily: fonts[500],
        color: "white",
        fontSize: 15,
        marginTop: -7

    },
    bottomContainer: {
        marginTop: 60, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        backgroundColor: colors.background,
        alignItems: "center",
        width: "100%",
        paddingBottom: 30,
        
    },
    profilePicture: {
        width: "100%", 
        height: "100%", 
        borderRadius: 500,
      
    },
    profilePicture_container: {
        width: 100, 
        height: 100, 
        borderRadius: 500, 
        marginBottom: 10,
        alignItems: "center",
        overflow: "hidden"

    }
    
})

export default styles;