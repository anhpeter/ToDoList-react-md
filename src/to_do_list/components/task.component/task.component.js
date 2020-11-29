import { Component } from 'react';
import './task.component.css';
import Helper from '../../shared/helpers/Helper';

class TaskComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: props.task
        }
    }

    // TEMPLATE
    getStatusTemplate() {
        return Helper.getTemplate().button.status[this.state.task.status];
    }

    getTaskTitle = () => {
        let title = this.props.task.title;
        let searchContent = this.props.searchContent;
        if (searchContent) {
            title = title.replace(new RegExp(`(${searchContent})`, 'g'), `<span style="background: yellow;">$1</span>`);
        }
        return title;
    }


    // RENDER
    render() {
        return (
            <tr>
                <th scope="row">{this.props.no}</th>
                <td dangerouslySetInnerHTML={{ __html: this.getTaskTitle() }}></td>
                <td><span onClick={() => { this.props.onTaskStatusChange(this.state.task) }} className={`btn-status ${this.getStatusTemplate().classes}`}>{this.getStatusTemplate().content}</span></td>
                <td>
                    <div className="d-flex">
                        <button className="btn btn-success w-100 mx-1  btn-sm" onClick={() => { this.props.onEditTaskClick(this.state.task) }}>
                            <span className="fal fa-pencil" ></span>
                        </button>
                        <button className="btn btn-danger w-100 mx-1  btn-sm" onClick={() => { this.props.onDeleteTaskClick(this.state.task) }}>
                            <span className="fal fa-trash-alt"></span>
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}

export default TaskComponent;