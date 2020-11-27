import { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <p className="bg-info text-light p-2 rounded">Add task</p>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="status" value="default" onChange={() => { }}>
                            <option value="default" disabled>Choose status</option>
                            <option value="active">Active</option>
                            <option value="hidden">Hidden</option>
                        </select>
                    </div>
                    <div className="form-group text-right">
                        <div className="btn-group btn-group-sm">
                            <button className="btn btn-primary">Save</button>
                            <button className="btn btn-warning ml-1">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;