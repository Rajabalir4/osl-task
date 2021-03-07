import React from "react";
import TaskList from "./TaskList";
class TaskBoard extends React.Component {
  state = {
    taskLists: [],
  };
  componentDidMount() {
    if (localStorage.taskLists) {
      const taskLists = JSON.parse(localStorage.taskLists);
      this.setState({ taskLists: taskLists });
    } else {
      const taskLists = [
        {
          category: "Today's task",
          id: 0,
          tasks: [
            {
              taskId: 0,
              taskText: "task 1",
              listNumber: 0,
            },
            {
              taskId: 1,
              taskText: "task 2",
              listNumber: 0,
            },
          ],
        },
        {
          category: "Pending",
          id: 1,
          tasks: [
            {
              taskId: 3,
              taskText: "task 3",
              listNumber: 1,
            },
            {
              taskId: 4,
              taskText: "task 4",
              listNumber: 1,
            },
          ],
        },
        {
          category: "abandoned",
          id: 2,
          tasks: [
            {
              taskId: 5,
              taskText: "task 5",
              listNumber: 2,
            },
            {
              taskId: 6,
              taskText: "task 6",
              listNumber: 2,
            },
          ],
        },
        {
          category: "Completed",
          id: 3,
          tasks: [
            {
              taskId: 7,
              taskText: "task 7",
              listNumber: 3,
            },
            {
              taskId: 8,
              taskText: "task 8",
              listNumber: 3,
            },
          ],
        },
        {
          category: "Inprogress",
          id: 4,
          tasks: [
            {
              taskId: 9,
              taskText: "task 9",
              listNumber: 4,
            },
            {
              taskId: 10,
              taskText: "task 10",
              listNumber: 4,
            },
          ],
        },
      ];

      this.setState({ taskLists: taskLists });
      localStorage.setItem("taskLists", JSON.stringify(taskLists));
    }
  }



  addTaskCard(taskText, listNumber) {
    const taskLists = JSON.parse(localStorage.getItem("taskLists"));

    const newTask = {
      taskText,
      listNumber,
      taskId: new Date().valueOf(),
    };

    console.log("list",taskLists)

    taskLists[listNumber].tasks.push(newTask);

    this.setState({
        taskLists: taskLists,
    });
    localStorage.setItem("taskLists", JSON.stringify(taskLists));
  }

  render() {
    const { taskLists } = this.state;
    return (
      <div className="task-board">
        <div className="task-list-wrapper">
          {taskLists.map((list) => {
            return <TaskList {...list} 
            key={list.id}
            onAdd={(taskText, listNumber) => this.addTaskCard(taskText, listNumber)} 
            ></TaskList>;
          })}
        </div>
      </div>
    );
  }
}

export default TaskBoard;
