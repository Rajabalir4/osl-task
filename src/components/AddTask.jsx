import React from 'react';
class AddTask extends React.Component {
    state = {
        edit:false,
        taskText:""
    }
    render() { 
        let {edit,taskText} = this.state
        if(edit)
        return (
            <div className="add-task-form">
                <form onSubmit={this.handleSubmit}>
                <input type="text" required={true} placeholder="task details" name="taskText" value={taskText} onChange={this.handleChange}></input>
                <button className="submit button_primary" type="submit">submit</button>
                <button className="cancel button_secondary" onClick={this.handleToggle}>cancel</button>
                </form>
            </div>
            
        )
        else
        return (<div className="add-task-button" onClick={this.handleToggle}>+ add task</div> );
    }

    handleChange =(e)=>{
        let {value} = e.target;
        this.setState({taskText:value})
    }


    handleSubmit = (e) =>{
            let {taskText} = this.state;
            let {listId} = this.props;
            e.preventDefault();
            this.props.onAdd(taskText,listId)
            this.setState({taskText:"",edit:false})
    }

    handleToggle = () =>{
        const {edit} =  this.state;
        this.setState({edit:!edit})
    }
}

export default AddTask;