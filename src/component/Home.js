import React,{useEffect} from 'react'
import {Jumbotron,Container,Button} from 'reactstrap'

function Home() {
    useEffect(() => {
        document.title="Home"
     }, []);
    return (
        <div className="text-center">
          <Jumbotron>
              <h1 className="display-3">Learn Code</h1>
              <p>Those who want to learn code follow the instructions  </p>
              <Container>
                  <Button color="primary">Start Courses</Button>
              </Container>
              </Jumbotron>  
        </div>
    )
}

export default Home
