import axios from 'axios'

class FieldService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/fields`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getFields() {
        return this.api.get('/all')
    }

    getOne(field_id) {
        return this.api.get(`/details/${field_id}`)
    }

    createField(fieldData) {
        return this.api.post('/create', fieldData)
    }

    deleteField(field_id) {
        return this.api.post(`/delete/${field_id}`)
    }

    editField(field_id, fieldData) {
        return this.api.put(`/edit/${field_id}`, fieldData)
    }

    addMaxPlayer(field_id, max) {
        return this.api.put(`/addmax/${field_id}/${max}`)
    }

    addEvent(field_id, event_id) {
        return this.api.put(`/addEvent/${field_id}/${event_id}`)
    }

    getSports(sport) {
        return this.api.get(`/filter?sport=${sport}`)
    }
}

const fieldsServices = new FieldService()

export default fieldsServices