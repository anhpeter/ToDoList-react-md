import Toolbar from "./components/toolbar.component/toolbar.component";
import TaskList from "./components/task_list.component/task_list.component";
import FormComponent from "./components/form.component/form.component";
import TitleComponent from "./components/title.component/title.component";
import React from 'react';
import Cookie from 'js-cookie';

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormOpening: false,
            task: null,

            // tasks
            taskArr: this.getList(),

            // params
            toolbarParams: {
                sort: {},
                search: "",
                filter: {
                    status: 'all'
                },
            }
        }
    }

    onTaskStatusChange = (task) => {
        console.log(task);
        let index = this.getTaskIndex(task);
        let taskArr = [...this.state.taskArr];
        task.status = (task.status === 'active') ? 'hidden' : 'active';
        taskArr[index] = task;
        this.setState({ taskArr }, () => {
            this.saveList();
        });
    }

    printList = () => {
        console.log(this.state.taskArr);
    }

    getList() {
        let list = [];
        let listString = Cookie.get('taskArr');
        if (listString) {
            try {
                list = JSON.parse(listString) || [];
            } catch (e) { }
        }
        return list;
    }

    saveList = () => {
        Cookie.set('taskArr', JSON.stringify(this.state.taskArr));
    }

    // FORM
    onAddTaskCLick = () => {
        this.setState({
            isFormOpening: true,
        })
    }


    onEditTaskClick = (task) => {
        this.setState({
            isFormOpening: true,
            task,
        });
    }

    onDeleteTaskClick = (task) => {
        let taskArr = [...this.state.taskArr];
        let index = this.getTaskIndex(task);
        taskArr.splice(index, 1);
        this.setState({ taskArr, }, () => {
            this.saveList();
        })
        if (this.state.isFormOpening && this.state.task?.id === task.id) {
            this.setState({ isFormOpening: false, task: null, })
        }
    }

    onFormCancelClick = () => {
        this.setState({
            isFormOpening: false,
            task: null,
        })
    }

    getTaskIndex = (task) => {
        let taskArr = [...this.state.taskArr];
        let index = taskArr.findIndex((item) => {
            return (item.id === task.id);
        })
        return index;
    }

    // FORM ACTIONS
    onAddTask = (task) => {
        let taskArr = [...this.state.taskArr];
        taskArr.unshift(task);
        this.setState({ taskArr, }, () => {
            this.saveList();
        })
    }

    onEditTask = (task) => {
        let taskArr = [...this.state.taskArr];
        let index = taskArr.findIndex((item) => {
            return (item.id === task.id);
        })
        taskArr.splice(index, 1, task);
        this.setState({ taskArr, }, () => {
            this.saveList();
        })
    }

    onToolbarParamsChange = (params) => {
        this.setState({ toolbarParams: params })
    }

    // RENDER
    render() {
        return (
            <div className="mai-wrapper">
                <div className="container">

                    {/* TITLE */}
                    <div className="my-4">
                        <TitleComponent title="My task (ReactJS)"></TitleComponent>
                    </div>

                    {/* TOOLBAR */}
                    <div>
                        <Toolbar
                            isFormOpening={this.state.isFormOpening}
                            onAddTaskClick={this.onAddTaskCLick}
                            onToolbarParamsChange={this.onToolbarParamsChange}
                        ></Toolbar>
                    </div>

                    {/* TASK LIST */}
                    <div className="my-3">
                        <div className="row">

                            {/* FORM */}

                            {
                                (this.state.isFormOpening)
                                    ?
                                    <div className="col-lg-4">
                                        <FormComponent
                                            key={this.state.task?.id}
                                            onFormCancelClick={this.onFormCancelClick}
                                            onAddTask={this.onAddTask}
                                            onEditTask={this.onEditTask}
                                            task={this.state.task}
                                        ></FormComponent>
                                    </div>
                                    : ""
                            }

                            {/* LIST */}
                            <div className={(this.state.isFormOpening) ? "col-lg-8" : "col-lg-12"}>
                                <TaskList
                                    key={Date.now()}
                                    taskArr={this.state.taskArr}
                                    toolbarParams={this.state.toolbarParams}
                                    onDeleteTaskClick={this.onDeleteTaskClick}
                                    onEditTaskClick={this.onEditTaskClick}
                                    onTaskStatusChange={this.onTaskStatusChange}
                                ></TaskList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainComponent;