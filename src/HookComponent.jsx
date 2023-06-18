
import React, {useState, useEffect} from 'react'

export default function HookComponent() {
  const [subject, setsubject] = useState({english:"", mathematics:"", science:""})
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    // Calculate the total score whenever the subject values change
    const { english, mathematics, science } = subject;
    const englishScore = parseFloat(english) || 0;
    const mathScore = parseFloat(mathematics) || 0;
    const scienceScore = parseFloat(science) || 0;
    const newTotalScore = englishScore + mathScore + scienceScore;
    setTotalScore(newTotalScore);
  }, [subject]);

  return (
    <div>
    <h2>Score System </h2>
    <input type="text" onChange={(e)=>setsubject({...subject, english:e.target.value})} placeholder='Enter the English score'/> <br/><br/>
    <input type="text" onChange={(e)=>setsubject({...subject, mathematics:e.target.value})} placeholder='Enter the Maths score'/><br/><br/>
    <input type="text" onChange={(e)=>setsubject({...subject, science:e.target.value})} placeholder='Enter the Science score'/>

    <h3>Total Score: {totalScore}</h3>
    
    </div>
  )
}
