import { Button } from 'reactstrap';
import React,{useState,useEffect} from 'react'
import Course from './Course';

function Allcourses() {

    useEffect(() => {
       document.title="All Course"
    }, []);
   const[courses,setCourses]=useState(
       [
        {title:"React Course" ,text:"It Is React Course"},
        {title:"Angular Course" ,text:"It Is Angular Course"},
        {title:"Android Course" ,text:"It Is Android Course"},
        {title:"Python Course" ,text:"It Is Python Course"}
        

   ]);
    return (
        <div>
            <Button onClick={()=>{
                setCourses([
                    ...courses,
                    {
                        title:"Python Course" ,text:"It Is Python Course"  
                    }
                ])
            }}>Update</Button>
            <h1>All Courses</h1>
            <p>List Of Courses are as Follows</p>

            {
                courses.length>0 ? courses.map((item)=>
                <Course  course={item}/>
                ) : "No Courses"
            }
            
        </div>
    )
}

export default Allcourses
