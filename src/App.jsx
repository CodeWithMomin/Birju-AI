import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const [question,setquestion]=useState("")
  const [answer,setanswer]=useState("")
async function genrateAnswer()
{
  setanswer("loading");
  const response=await axios({
    url:import.meta.env.REACT_APP_API_KEY,
    method:'post',
    data:{"contents":[{"parts":[{"text":question}]}]}
  })
  setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
}
  return (
   <>
   <div className="container">
   <div className='box'>
      <div className="imagediv">
        <img src="https://cdn-icons-png.flaticon.com/128/11592/11592357.png"  />
      </div>
      <div className="heading">
        <h3>How Can I Help You Today?</h3>
      </div>
      <div className="inputdiv">
        <input id='input' type="text" placeholder='Message ChatBot' value={question} onChange={(e)=>{
          setquestion(e.target.value)
        }} />
      </div>
      <div className="btndiv">
        <button onClick={genrateAnswer}>
          <img id='btnimg' src="https://cdn-icons-png.flaticon.com/128/5974/5974717.png" alt="" />
        </button>
      </div>
    </div>
    <pre className="response">
      {answer}
    </pre>
   </div>
   </>

  )
}

export default App