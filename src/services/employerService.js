import axios from 'axios'
export default class EmployerService{
    getEmployer(){
        return axios.get("http://localhost:8080/api/employers/getall");
    }
    updateEmployer(){
        return axios.put("http://localhost:8080/api/employers/update");
    }
}
