import { Component } from 'react';
import TaskComponent from '../task.component/task.component';

class TaskListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayTaskArr: [],
        }
        this.state.displayTaskArr = this.getDisplayTaskArr();
    }

    getDisplayTaskArr = () => {
        let taskArr = [...this.props.taskArr];
        let toolbarParams = this.props.toolbarParams;
        if (toolbarParams.search.trim() !== '' || toolbarParams.filter.status !== 'all') {
            taskArr = taskArr.filter((item) => {
                return (
                    item.title.indexOf(toolbarParams.search) >= 0 &&
                    (item.status === toolbarParams.filter.status || toolbarParams.filter.status === 'all')
                );
            })
        } return taskArr;
    }


    // TASK HTML
    getTaskArrHtml() {
        let htmlArr = this.state.displayTaskArr
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
            <tr><td colSpan="1000"><div className="alert alert-info" > You do not have any task, yet! </div></td></tr>
        )
    }

    render() {
        return (
            <div className="task-list-wrapper">
                <table className="table table-stripped">
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
                            (this.state.displayTaskArr.length > 0)
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