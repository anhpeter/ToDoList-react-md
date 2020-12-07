import { Component } from 'react';
import TaskComponent from '../task.component/task.component';

class TaskListComponent extends Component {

    // TASK HTML
    getTaskArrHtml() {
        let htmlArr = this.props.taskArr
            .map((task, index) => {
                return <TaskComponent
                    key={task.id}
                    no={index + 1}
                    task={task}
                    onDeleteTaskClick={this.props.onDeleteTaskClick}
                    onEditTaskClick={this.props.onEditTaskClick}
                    searchContent={this.props.toolbarParams.search}
                    onTaskStatusChange={this.props.onTaskStatusChange}
                ></TaskComponent>
            })
        return htmlArr;
    }

    getEmptyMsg() {
        return (
            <tr><td colSpan="1000"><div className="alert alert-info text-center" > You do not have any task, yet! </div></td></tr>
        )
    }

    render() {
        return (
            <div className="task-list-wrapper">
                <table className="table table-striped">
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th className="text-center" width="30%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.props.taskArr?.length > 0)
                                ? this.getTaskArrHtml()
                                : this.getEmptyMsg()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskListComponent;