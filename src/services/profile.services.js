import axios from 'axios'

class ProfileService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/profile`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getProfile(user_id) {
        return this.api.get(`/getone/${user_id}`)
    }
}

const profileServices = new ProfileService()
export default profileServices