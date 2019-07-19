import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    mainContainerStyle: { flex: 1, backgroundColor: '#FFA640', padding: 20 },
    firstContainerStyle: { flex: 1, justifyContent: "center", alignItems: "flex-end", marginRight: 10 },
    secondContainerStyle: { flex: 3, alignItems: "center" },
    textInputStyle: { height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, marginTop: 10, fontSize: 17 },
    textHeaderStyle: { fontSize: 35, marginBottom: 10, fontWeight: 'bold' },
    textDescriptionStyle: {fontSize: 17,textAlign: 'center', textAlignVertical: 'center'}
})