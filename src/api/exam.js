import axios from 'axios';
const base_url="http://124.222.112.118:8085/";

export function getExam(params=null){
    return axios.get(base_url+'test/list/',params)
}