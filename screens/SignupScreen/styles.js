import { StyleSheet } from "react-native"
import fonts from "../../fonts";
import colors from "../../colors"
const styles = StyleSheet.create({
    
    container: {
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100%"
    },
    smallBall: {
        backgroundColor: "rgba(70, 136, 212, 0.8)", 
        height: 150, 
        width: 150, 
        position: "absolute", 
        borderRadius: 500, 
        bottom: -100, 
        left: -50
    },
    bigBall: {
        backgroundColor: "rgba(70, 136, 212, 0.5)", 
        height: 250, 
        width: 250, 
        position: "absolute", 
        borderRadius: 500, 
        bottom: -140, 
        right: -130
    },
    header: {
        fontFamily: fonts[700],
        fontSize: 25, 
        color: "#4688D4", 
        position: "absolute", 
        top: 30
    },
    containerInner: {
        width: "80%", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 10
    },
    glomtLosenord: {
        marginTop: 30, 
        fontFamily: fonts[500], 
        color: colors.main, 
        fontSize: 13
    },
    logInText: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: 35
    },
    logInText1: {
        fontFamily: fonts[500], 
        color: "#b3b3b3", 
        fontSize: 13, 
        marginRight: 4
    },
    logInText2: {
        fontFamily: fonts[600], 
        color: colors.main, 
        fontSize: 13.5
    }
})

export default styles;