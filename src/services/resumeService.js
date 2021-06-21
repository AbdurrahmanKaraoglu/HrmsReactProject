import axios from 'axios'

export default class ResumeService {
    getAllByJobSeeker(jobSeekerId){
        return axios.get("http://localhost:8080/api/resumes/getAllByJobSeekerId?jobSeekerId="+jobSeekerId);
    }
}
