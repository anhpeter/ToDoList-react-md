import { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>Going to school</td>
                <td><span className="badge badge-info">Active</span></td>
                <td>
                    <div className="d-flex">
                        <button className="btn btn-success w-100 mx-1  btn-sm">
                            <span className="fal fa-pencil"></span>
                        </button>
                        <button className="btn btn-danger w-100 mx-1  btn-sm">
                            <span className="fal fa-trash-alt"></span>
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Task;