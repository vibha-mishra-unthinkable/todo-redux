const intitialState = {
  tasks: [],
};
const taskReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "SAVE_TASK":
      const { id, task } = action.payload;

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: id,
            task: task,
          },
        ],
      };
    case "DELETE_TASK":
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);

      return {
        ...state,
        tasks: newTasks,
      };
    default:
      return state;
  }
};
export default taskReducer;
