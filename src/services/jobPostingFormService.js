import axios from "axios";
export default class JobPostingFormService{
    getJobPostingForm(){
        return axios.get("http://localhost:8080/api/jobpostingforms/getAll");
    }

    getJobPostingFormPageable(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/jobpostingforms/getAllByPage?pageNo=${pageNo}&pageSize=${pageSize}`);
    }

    getJobPostingFormReleaseDate(){
        return axios.get("http://localhost:8080/api/jobpostingforms/getByIsActiveOrderByReleaseDate");
    }

    getByIsActiveAndEmployerCompanyName(companyName){
        return axios.get("http://localhost:8080/api/jobpostingforms/getByIsActiveAndEmployerCompanyName?companyName=" + companyName);
    }

    addJobPosting(values){
        return axios.post("http://localhost:8080/api/jobpostingforms/add",values)
    }
    updateMyJobPosting(values){
        return axios.put("",values)
    }
}