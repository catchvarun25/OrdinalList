import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        color: 'white',
        fontWeight: "900",
        marginBottom: 16
    },
    todoContainer: {
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingHorizontal: 16,
        paddingTop: 24,
        height: '100%'
    },
    textInput: {
        color: 'white',
        backgroundColor: '#24252c',
        marginBottom: 16
    },
    addTodoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    icon: {
        flex: 1,
    }
})

export { styles };