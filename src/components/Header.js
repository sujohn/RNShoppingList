import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// before destructure const Header = (props) => OR const Header = props => 
// after destructure const Header = {(title)} => 

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

// If no props are passed, then the default will be shown.
Header.defaultProps = {
    title: 'Shopping List',
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#285E29',
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    },
});
