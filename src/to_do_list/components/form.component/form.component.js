import { Component } from 'react';
import Helper from '../../shared/helpers/Helper';

class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            formType: (props.task) ? 'edit' : 'add',
            form: {},
        }
        this.state.form = this.getFormValues();
    }

    getFormValues = () => {
        let formValues;
        if (this.state.formType === 'edit') formValues = this.state.task;
        else formValues = this.getEmptyForm();
        return formValues;
    }

    getEmptyForm() {
        return {
            id: '',
            title: '',
            status: '',
        }
    }

    // INPUT CHANGE
    onInputChange = ($event) => {
        let inputName = $event.target.name;
        let inputValue = $event.target.value;
        let form = { ...this.state.form };
        form[inputName] = inputValue;
        this.setState({ form: form })
    }

    isFormValid() {
        try {
            let formValues = this.state.form;
            return (
                formValues.title.trim() !== '' &&
                ['active', 'hidden'].includes(formValues.status)
            )
        } catch (e) {
            return true;
        }
    }

    onSubmit= ($event) => {
        $event.preventDefault();
        if (this.isFormValid()) {
            if (this.state.formType === 'add') {
                let task = this.state.form;
                task.id = Helper.generateId();
                this.props.onAddTask(task);
            }else{
                this.props.onEditTask(this.state.form);
            }
        }
        if (this.state.formType === 'add') this.setState({form: this.getEmptyForm()});
    }

    // RENDER
    render() {
        return (
            <div className="form-wrapper">
                <p className="bg-info text-light p-2 rounded">{(this.state.formType === 'edit') ? 'Edit task' : 'Add task'}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="title" placeholder="Title" value={this.state.form.title} onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="status" value={this.state.form.status} onChange={this.onInputChange}>
                            <option value="" disabled>Choose status</option>
                            <option value="active">Active</option>
                            <option value="hidden">Hidden</option>
                        </select>
                    </div>
                    <div className="form-group text-right">
                        <div className="btn-group btn-group-sm">
                            <button
                                className="btn btn-primary"
                                disabled={!this.isFormValid()}
                            >{(this.state.formType === 'edit' ? 'Save' : 'Add')}</button>
                            <button className="btn btn-warning ml-1" onClick={this.props.onFormCancelClick}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormComponent;