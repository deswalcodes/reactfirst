import { useState,useEffect } from "react";




export function useFetch(url,timeOut){
    const [finalData,setFinalData] = useState({})
    const [loading,setLoading] = useState(true)

    async function getDetails(){
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json)
        setLoading(false)

    }



    useEffect(function(){
        getDetails()

    },[url])
    useEffect(function(){
        setInterval(function(){
            getDetails
        },timeOut * 1000)

    })



    return {
        finalData,
        loading

    }


}