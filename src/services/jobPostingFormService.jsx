import axios from "axios";
export default class JobPostingFormService{
    getJobPostingForm(){
        return axios.get("http://localhost:8080/api/jobpostingforms/getAll");
    }
}