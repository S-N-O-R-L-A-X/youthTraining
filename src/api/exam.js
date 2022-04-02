const base_url="1.15.30.214:8085/";

const getExam=(params)=>{
    return axios.get(base_url+'test/list/',params)
}