import { Component } from 'react';
const { default: Task } = require("../task/task");

class TaskList extends Component {
    render() {
        return (
            <div className="task-list-wrapper">

                <table className="table table-hover">
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th className="text-center" width="30%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Task></Task>
                        <Task></Task>
                        <Task></Task>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList;