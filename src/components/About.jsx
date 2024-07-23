import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component Did Mount")
    }
    render(){
        console.log("Parent render")

        return(
            <div className="about">
                <h1>About Page</h1>
                <h2>This is the Food Delivery Application build in React</h2>
                {/* <User name="Sai" contact="sairamramavath01@gmail.com" location="Hyd" /> */}
                <UserClass name="Child1" contact="sairamramavath01@gmail.com" location="Hyd" />
                <UserClass name="Child2" contact="sairamramavath01@gmail.com" location="Hyd" />
                <UserClass name="Child3" contact="sairamramavath01@gmail.com" location="Hyd" />
                <UserClass name="Child4" contact="sairamramavath01@gmail.com" location="Hyd" />

            </div>

        )
    }
}

export default About;