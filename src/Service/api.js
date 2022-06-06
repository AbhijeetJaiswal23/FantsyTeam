import axios from 'axios'
// ADD UUSER API
const URL='';
export const addUser=async (data)=>{

    try{

        return await axios(`${URL}/add`,data);
    }
    catch(error)
    {
        console.log("Error while calling add user API",error);
    }
}
