import { StyleSheet } from "react-native"
import colors from "../../colors"
import fonts from "../../fonts"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        alignItems: "center",
        paddingTop: 30,

    },
    headerText: {
        fontFamily: fonts[600],
        color: "white", 
        fontSize: 40,
    },
    bottomContainer: {
        marginTop: 0, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        backgroundColor: colors.background,
        alignItems: "center",
        minHeight: 400
    }

})

export default styles;