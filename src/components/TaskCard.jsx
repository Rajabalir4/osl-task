import React from 'react';
class TaskCard extends React.Component {
    render() { 
        let {taskText} = this.props;
        return ( <div className="task-card" draggable={true} id={this.props.taskId} onDragStart={this.props.onDragStart}>
            {taskText}
        </div>);
    }
}
 
export default TaskCard;