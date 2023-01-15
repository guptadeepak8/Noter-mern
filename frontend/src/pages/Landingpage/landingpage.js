import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../Landingpage/landingpage.css'

const Landingpage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className="introText">
            <div className='intro'>
              <h1 className='title'>WHAT AN IDEA!</h1>
              <p className='subtitile'>Save your Aim here safely with Noter</p>
            </div>
              <div className="buttonContainer">
                <a href="/login">
                  <button >LOGIN </button>
                </a>
                <a href="/register">
                  <button >SIGN UP </button>
                </a>
              </div>
          </div>
        </Row>
      </Container>      
    
    </div>
  )
}

export default Landingpage