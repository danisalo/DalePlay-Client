import axios from 'axios'

class EventService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/events`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getEvents() {
        return this.api.get('/getAll')
    }

    getOne(event_id) {
        return this.api.get(`/getOne/${event_id}`)
    }

    createEvent(eventData) {
        return this.api.post('/create', eventData)
    }

    joinEvent(event_id) {
        return this.api.put(`/join/${event_id}`)
    }
}

const eventsServices = new EventService()

export default eventsServices