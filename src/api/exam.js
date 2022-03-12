const base_url="1.15.30.214:8085/";

const getExam=(params)=>{
    return axios.get(base_url+'v2/api-docs/',params)
}