import Toolbar from "./components/toolbar/toolbar";
import TaskList from "./components/task_list/task_list";
import Form from "./components/form/form";
import { Component } from 'react';
const { default: Title } = require("./components/title/title");

class Main extends Component {
    render() {
        return (
            <div className="mai-wrapper">
                <div className="container">

                    {/* TITLE */}
                    <div className="my-4">
                        <Title></Title>
                    </div>

                    {/* TOOLBAR */}
                    <div>
                        <Toolbar></Toolbar>
                    </div>

                    {/* TASK LIST */}
                    <div className="my-3">
                        <div className="row">

                            {/* FORM */}
                            <div className="col-lg-4">
                                <Form></Form>
                            </div>

                            {/* LIST */}
                            <div className="col-lg-8">
                                <TaskList></TaskList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;