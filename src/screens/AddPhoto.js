import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../store/actions/contacts'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

const noUserSave = 'Você precisa estar logado para adicionar um contato'
const noUserImage = 'Você precisa estar logado para adicionar imagem ao contato'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {
        if (!this.props.name) {
            Alert.alert('Falha!', noUserImage)
            return
        }

        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        if (!this.props.name) {
            Alert.alert('Falha!', noUserSave)
            return
        }

        this.props.onAddContact({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        this.setState({ image: null, comment: '' })
        this.props.navigation.navigate('ListContact')
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Adicionar um Contato</Text>
                    <TextInput placeholder='Nome' style={styles.input}
                        autoFocus={true}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })} />
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image}
                            style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage}
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.save}
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddContact: contact => dispatch(addContact(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)