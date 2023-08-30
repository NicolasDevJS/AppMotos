import axios from 'axios';

export const GetUserToken = async ({ mobile, password }) => {
    data = {
        'mobile': mobile,
        'password': password
    }
    try {
        const response = await axios.post('http://192.168.0.10:8000/authentication/token/', data)
        if (response.status === 201) {
            return response.data
        }
    } catch (e) {
        console.log(e)
        return  false
    }
}
