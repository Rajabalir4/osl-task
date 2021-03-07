import React from 'react';
import AddTask from './AddTask';
import TaskCard from './TaskCard';
class TaskList extends React.Component {
    render() { 
        let {category,tasks,id} = this.props;
        return ( <div className="task-list" >
            <div className="category-heading">{category}</div>
            {
                tasks.map(task=>{
                    return <TaskCard {...task} ></TaskCard>
                })
            }
            <AddTask onAdd={this.props.onAdd} listId={id} ></AddTask>
        </div>);
    }
}
 

export default TaskList;