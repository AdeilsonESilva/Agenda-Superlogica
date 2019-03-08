import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'

import UserContact from './UserContact'

class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <UserContact email={this.props.email}
                    nickname={this.props.nickname} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 70
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Contact)