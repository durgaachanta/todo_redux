import React from 'react';
import { connect } from 'react-redux';
import { editItem } from '../redux';


const EditTodoTask = (props) => {

  const id = props.match.params.id;

  const handleChange = (event) => {
    console.log(event.target.value);
    props.editItem(id, event.target.value);

  }



  return (
    <div>
      <label>Edit Task:</label>
      <input value={props.taskList[id]} onChange={handleChange} />

    </div>
  )
}

const mapStateToProps = (state) => ({
  taskList: state.newTaskList,
});
const mapDispatchToProps = (dispatch) => ({
  editItem: (id, newValue) => dispatch(editItem(id, newValue)),
})


export default connect(mapStateToProps, mapDispatchToProps)(EditTodoTask);