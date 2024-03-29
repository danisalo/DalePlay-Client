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

    getClubByField(field_id) {
        return this.api.get(`/getbyfield/${field_id}`)
    }

    addToClub(club_id, field_id) {
        return this.api.put(`/addtoclub/${club_id}/${field_id}`)
    }

    createClub(clubData) {
        return this.api.post('/create', clubData)
    }

    deleteClub(club_id) {
        return this.api.delete(`/delete/${club_id}`)
    }

    editClub(club_id, clubData) {
        return this.api.put(`/edit/${club_id}`, clubData)
    }
}

const clubsServices = new ClubsService()

export default clubsServices