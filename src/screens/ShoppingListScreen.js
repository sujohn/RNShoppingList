import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList, Alert } from 'react-native';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';

const ShoppingListScreen = () => {

    const [items, setItems] = useState([
        {id: 1, text: 'Milk'},
        {id: 2, text: 'Eggs'},
        {id: 3, text: 'Bread'},
        {id: 4, text: 'Juice'},
    ]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    };

    const addItem = text => {
        if (!text) {
            Alert.alert('Error', 'Please enter and item', [{text: 'Ok'}]);
        } else {
            setItems(prevItems => {
                return [{id: 0, text}, ...prevItems];
            });
        }
        
    };

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#285E29' />
            <SafeAreaView style={{ flex: 0, backgroundColor: '#285E29' }} />
            <SafeAreaView style={{ flex: 1 }}>
                <Header title='Shopping List' />
                <AddItem addItem={addItem}/>
                <FlatList 
                    data={items}
                    renderItem={({item}) => <ListItem item = {item} deleteItem={deleteItem}/>}
                />
            </SafeAreaView>
        </>
    )
}

export default ShoppingListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#285E29'
   },
})
