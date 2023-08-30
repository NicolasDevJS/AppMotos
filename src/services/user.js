import axios from 'axios';

export const ValidateMobileNumber = async ({ mobile }) => {
    try {
        const response = await axios.get(`http://192.168.0.10:8000/user/${mobile}`)
        if (response.status === 200) {
            return true
        }
    } catch (e) {
        console.log(e)
        return  false
    }
}
