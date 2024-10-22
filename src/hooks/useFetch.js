import { useState,useEffect } from "react";




export function useFetch(url){
    const [finalData,setFinalData] = useState({})
    const [loading,setLoading] = useState(true)

    async function getPostdata(){
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json)
        setLoading(false)

    }



    useEffect(function(){
        getPostdata()

    },[url])

    return {
        finalData,
        loading

    }


}