import axios from 'axios'

export default class ResumeService {
    getAllByJobSeekerId(id) {
        return axios.get("http://localhost:8080/api/resumes/getAllByJobSeekerId?jobSeekerId=" + id);
    }

    getAll() {
        return axios.get("http://localhost:8080/api/resumes/getall");
    }



}
