import { useEffect, useState } from "react";
import axios from 'axios'
export default function usefetchQuestions(){
      const [questions,setQuestions] = useState([])
    useEffect(()=>{
        (async()=>{
        const response = await axios.get('https://the-trivia-api.com/v2/questions/')
        const data = await response.data
        setQuestions(data)
        })();
    },[])
    return questions
}