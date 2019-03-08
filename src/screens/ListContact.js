import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Contact from '../components/Contact'

class ListContact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.contacts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Contact key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
})

const mapStateToProps = ({ contacts }) => {
    return {
        contacts: contacts.contacts
    }
}

export default connect(mapStateToProps)(ListContact)