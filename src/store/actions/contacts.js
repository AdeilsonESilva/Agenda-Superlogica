import axios from 'axios'

export const addContact = contact => {
    return dispatch => {
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-agendasuperlogica.cloudfunctions.net',
            method: 'post',
            data: {
                image: contact.image.base64
            }
        })
            .catch(err => console.log(err))
            .then(resp => {
                contact.image = resp.data.imageUrl
                axios.post('/contacts.json', { ...contact })
                    .catch(err => console.log(err))
                    .then(res => console.log(res.data))
            })

    }
}