import { Component } from 'react';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar-wrapper row">
                {/* ADD */}
                <div className="col-12 my-1">
                    <button className="btn btn-dark btn-sm">
                        <span className="fal fa-plus"></span>
                        <span> Add task </span>
                    </button>
                </div>

                {/* SEARCH */}
                <div className="col-lg-6 my-1">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Type key word ..." />
                        <div className="input-group-append">
                            <button className="btn btn-primary">
                                <span className="fal fa-search"></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* FILTER &  SORT*/}
                <div className="col-lg-6 my-1">
                    <div className="row">
                        {/* FILTER */}
                        <div className="col-6">
                            <select className="form-control" name="status" value="default" onChange={() => { }}>
                                <option value="all">All status</option>
                                <option value="active">Active</option>
                                <option value="hidden">Hidden</option>
                            </select>
                        </div>

                        {/* SORT */}
                        <div className="col-6">
                            <div className="dropdown">
                                <button className="btn btn-light border border-dark dropdown-toggle" data-toggle="dropdown">Sort</button>
                                <div className="dropdown-menu" >
                                    <button className="dropdown-item">Title a-z</button>
                                    <button className="dropdown-item" >Title z-a</button>
                                    <hr />
                                    <button className="dropdown-item">Active task</button>
                                    <button className="dropdown-item" >Hidden task</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Toolbar;