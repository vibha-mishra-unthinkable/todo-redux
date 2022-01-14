export const saveTask = (task) => {
  return {
    type: "SAVE_TASK",
    payload: {
      id: new Date().getTime().toString(),
      task: task,
    },
  };
};
export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};
