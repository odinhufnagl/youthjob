import { StyleSheet } from "react-native"
import colors from "../../colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },

    bottomContainer: {
            marginTop: 220, 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20, 
            backgroundColor: colors.background,
            alignItems: "center",
            width: "100%",
            paddingBottom: 60,
        },

    
})

export default styles