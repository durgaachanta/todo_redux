import React from 'react';
// connect connects the react component to the redux store
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { captureInput, addNewTask, deleteTask } from '../redux';

class ToDoParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  updateInput = (event) => {
    console.log(event.target.value);
    this.props.captureInput(event.target.value);
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.addNewTask();
  }
  deleteTask = (id) => {
    this.props.deleteTask(id);

  }


  render() {

    return (
      <div>
        <h1>ToDo with redux</h1>
        <form onSubmit={this.submitForm}>
          <label htmlFor="inputtask">New Tasks:</label>
          <input name="inputtask" onChange={this.updateInput} value={this.props.newTask} />
        </form>
        {this.props.newTaskList.map((item, idx) => {
          return <li>{item}<button><Link to={`/edit/${idx}`}>Edit</Link></button><button onClick={() => { this.deleteTask(idx) }}>Delete</button></li>
        })}
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  newTask: state.newTask,
  newTaskList: state.newTaskList,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTask: () => dispatch(addNewTask()),
  captureInput: (task) => dispatch(captureInput(task)),
  deleteTask: (id) => dispatch(deleteTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoParent);