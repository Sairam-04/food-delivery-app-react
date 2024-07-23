import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name+"Child Constructor")
    this.state = {
        count : 0,
    }
  }

  componentDidMount(){
    console.log(this.props.name+"Child Component 1")
  }

  render() {
    console.log(this.props.name+"Child render");
    const {name, location, contact} = this.props;
    const {count} = this.state;
    return (
      <div className="aboutuser">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h4>Count: {count}</h4>
        <button onClick = {()=>{
            this.setState({
                count: this.state.count + 1
            })
        }}>Increase Count</button>
      </div>
    );
  }
}

export default UserClass;
