import React from "react";

class WelcomeCard extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constrcutor")
        this.state= {
            title : "I am stored in state"
        }
    }

    componentWillMount() {
        console.log("COmponent will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }
    
    shouldComponentUpdate(...args) {
        console.log("SHould component update", args)
        return false;
    }

    componentDidUpdate(...args) {
        console.log("SHould component update", args)
    }

    componentWillUnmount(...args) {
        console.log(" component unmount", args)
    }

    render() {
        console.log("Render")
        const { name } = this.props
        return <div>
            <h3>Welcome {name}</h3>
            <button onClick={()=> {
                this.setState({title: "changed title"})
            }}>Change title</button>
        </div>
    }
}

export default WelcomeCard