import axios from "axios"
// Add a request interceptor
axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.accessToken){
      const token = 'Bearer ' + user.accessToken;
      config.headers.Authorization =  token;
    }
  
    return config;
  });


const USERS_REST_API_URL = 'http://localhost:8080';

class UserService{
    
    getFiles(){
       return axios.get(USERS_REST_API_URL + '/allFiles');
    }


    addNewDir(name, parrentFile){
      let dir = {name, type: 'file',  parrentFile};
      return axios.post(USERS_REST_API_URL+ '/dir/add', dir)
    }

    deleteDir(id){
      return axios.get(USERS_REST_API_URL+ '/dir/delete/'+ id)
    }

}

export default new UserService()