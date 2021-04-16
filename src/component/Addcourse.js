import { Button } from 'reactstrap'
import React,{useEffect} from 'react'
import {Form,FormGroup, Input,Container} from 'reactstrap'

function Addcourse() {
    useEffect(() => {
        document.title="Add Course"
     }, []);
    return (
        <>
            <Form>
                <h1 className="text-center my-4 ">Fill Course Detail</h1>
                <FormGroup>
                  <label for ="UserId">Course Id</label>
                  <Input type="text" placeholder="Enter here" name="userId"></Input>
                </FormGroup>

                <FormGroup>
                  <label for ="title">Course Title</label>
                  <Input type="text" placeholder="Enter Title" name="title"></Input>
                </FormGroup>
                <FormGroup>
                <label for ="area ">Course Description</label>
                <Input type="textarea" placeholder="Enter description" name="area" style={{height:150}}></Input>
                </FormGroup>
                

                <Container>
                    <Button color="success">Update</Button>
                    <Button color="warning ml-3">Clear</Button>

                </Container>

             </Form>
             </>
    );
};

export default Addcourse
