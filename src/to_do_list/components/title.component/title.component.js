import { Component } from 'react';
import axios from 'axios'

class TitleComponent extends Component {

    componentDidMount() {
        axios.get('http://localhost:3000/api/posts')
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    render() {
        return (
            <div className="title-wrapper row">
                <div className="col-12">
        <h3 className="text-center">{this.props.title}</h3>
                </div>
            </div>
        )
    }
}

export default TitleComponent;