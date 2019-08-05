import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    mainContainerStyle: { flex: 1, backgroundColor: '#DAE6EF', padding: 20 },
    firstContainerStyle: { flex: 1, justifyContent: "center", alignItems: "flex-end", marginRight: 10 },
    secondContainerStyle: { flex: 3, alignItems: "center" },
    textInputStyle: { height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, marginTop: 10, fontSize: 17, borderRadius: 6, fontFamily: 'sans-serif' },
    textHeaderStyle: { fontSize: 25, marginBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif' },
    textDescriptionStyle: {fontSize: 17,textAlign: 'center', textAlignVertical: 'center', marginTop: 8, fontFamily: 'sans-serif'}
})