import axios from 'axios';

export const action = {

  GetDogList : ()=>{
    return new Promise((resolve,reject)=>{
      axios({
        method: 'get',
        url: 'https://api.thedogapi.com/v1/breeds',
      })
        .then(function (response) {
          resolve(response.data) 
        }).catch(()=>{
          reject('Error','ไม่พบดาต้า')
        })
    })}
   

}
