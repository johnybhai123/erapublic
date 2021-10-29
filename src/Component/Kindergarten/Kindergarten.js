import React from 'react'

import { Main } from './Kindergarten.element'
function Kindergarten() {
    return (
        <Main>
            <h1 style={{color:'green'}}>Kindergarten</h1>
            <hr />
          <div style={{display:'flex',flexWrap:'wrap'}}>
          <img src='http://erapublicschool.herokuapp.com/media/243006212_591716055515805_374113974095213513_n.jpg' style={{height:'400px',width:'350px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          <img src='http://erapublicschool.herokuapp.com/media/243006311_591717178849026_3428251982410616834_n.jpg' style={{height:'400px',width:'350px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          
          </div>
            <p style={{padding:'40px 0 0 0'}}>The Kindergarten Programme inculcates in children the qualities of curiosity, exploration and discovery in a fun-filled, safe and happy learning environment. The Kindergarten Programme makes use of a range of individual and group activities which create a lively and positive learning environment. Games, songs, creative projects, story-telling, role-playing, drawing and painting help develop children's foundational skills in literacy and numeracy. They are encouraged to play, explore and discover 
through dance, music, art and craft. Singing, rhyming and reciting are employed in the Language Arts, and the Phonics Programme. The use of manipulative, pictures and symbols helps them identify relationships between sets and groups of things to be sorted, counted, shared and represented. Sports and interactions with sports teachers help in strengthening coordination and motor skills, and instil enthusiasm for sports. Celebration of festivals sensitises them to multiple traditions and cultures
</p>
            
        </Main>
    )
}

export default Kindergarten
