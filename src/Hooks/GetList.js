import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../Constants/url'

export const GetList = (breed,update) => {
    const [list,setList] = useState([])
    useEffect (()=>{
        const token = localStorage.getItem("token");
        axios.get(`${BASE_URL}/list?breed=${breed}`,{headers:{Authorization:token}})
        .then((response) => {
            setList(response.data.list)
        })
        .catch((error) => {
            console.log(error);
        })
    },[update])
    return list
}