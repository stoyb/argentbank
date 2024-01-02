import axios from "axios";

export const fetchProfile = async () => {
    try {
        let isAPI = false
        if(isAPI){
            const response = await axios.post('http://localhost:3001/api/v1/user/profile');
            return response.data
        } else {
            const profile = {
                firstName: 'Tony',
                lastName: 'Stark',
                email: 'tony@stark.com',
                password: 'password123'
              }
            return profile
        }
    } catch(error) {
        console.error(error);
        return null
    }
}
