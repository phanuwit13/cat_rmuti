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
    ,
    Login : (username,password)=>{
      return new Promise((resolve,reject)=>{
        axios({
          method: 'post',
          url: 'http://localhost:4020/api/login',
          data:{
            username: username,
            password: password,
          },
        })
          .then(function (response) {
            resolve(response.data)
          }).catch(()=>{
            reject('Error','ไม่พบดาต้า')
          })
      })}
   

}
