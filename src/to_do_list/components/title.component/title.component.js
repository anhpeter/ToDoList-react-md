import { Component } from 'react';

class TitleComponent extends Component {
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