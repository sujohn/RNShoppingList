import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {

    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
        <View style={styles.container}>
            <TextInput value={text} placeholder="Add Item..." style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => {
                addItem(text);
                setText('');
            }} >
                <Text style={styles.btnText}><Icon name="plus" size={20}/> Add Item </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    input: {
        height: 50,
        padding: 16,
        fontSize: 16,
        borderColor: 'lightgray',
        borderRadius: 5,
        borderWidth: 1,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 8,
        marginTop: 16,
        borderRadius: 5,
    }
});

export default AddItem;