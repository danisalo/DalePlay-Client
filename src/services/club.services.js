import axios from 'axios'

class ClubsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/clubs`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getClubs() {
        return this.api.get('/getAll')
    }

    getOne(club_id) {
        return this.api.get(`/getOne/${club_id}`)
    }

    createClub(clubData) {
        return this.api.post('/create', clubData)
    }

    deleteClub(club_id) {
        return this.api.post(`/delete/${club_id}`)
    }

    editClub(club_id) {
        return this.api.put(`/edit/${club_id}`)
    }
}

const clubsServices = new ClubsService()

export default clubsServices