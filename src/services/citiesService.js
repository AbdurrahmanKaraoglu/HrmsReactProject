import axios from 'axios'

export default class CitiesService{
    getAll() {
        return axios.get("http://localhost:8080/api/cities/getall");
    }
}
