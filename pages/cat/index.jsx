/* eslint-disable react/jsx-key */
import React,{useEffect,useState} from 'react'
import {action} from '/actions'

 function Cat() {

  const [dogData, setDogData] = useState()
  const [dogShow, setDogShow] = useState()
  const [num, setNum] = useState()

  
  const GetData = async()=>{
    let data = await action.GetDogList()
    setDogData(data)
    setDogShow(data)
  }

  const handleSearch =(key)=>{
    let data = dogData.filter((item)=>{
      return item.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    })
    console.log(key,data);
    setDogShow(data)
  }

  useEffect(() => {
    GetData()
  }, [])

  useEffect(() => {
    dogData ? dogData.length > 0 ? console.log('rmuti > 0') :console.log('rmuti < 0') :console.log('no data') 
  }, [dogData])


  return (
    <React.Fragment>
  <div style={{display:'flex',justifyContent:'center',margin:'10px'}} >
      <input onChange={(e)=>{handleSearch(e.target.value)}} style={{width:'60%'}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  </div>
    <div style={{display:'flex',columnGap:'10px',flexWrap:'wrap',rowGap:'10px'}}>
      {dogShow ? (
dogShow.map((item,index)=>{
  return(
    <div key={index} className="card" style={{width:"18rem"}}>
    <img src={item.image.url} className="card-img-top" alt="..." />
    <div className="card-body">
      <div>
        <span>Name</span> : <span>{item.name}</span>
      </div>
      <hr></hr>
      <div>
        <span>Origin</span> : <span>{item.origin}</span>
      </div>
      <hr></hr>
      <div>
        <span>Temperament</span> : <span>{item.temperament}</span>
      </div>
      <hr></hr>
    </div>
    <div className="card-footer text-muted">
    <span>life span</span> <span>{item.life_span}</span>
  </div>
  </div>
  )

})
      ):null}
    
    </div>
    </React.Fragment>
  )
}

export default Cat
