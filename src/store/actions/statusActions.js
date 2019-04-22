const createStatus = status => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: "CREATE_STATUS", status });
  };
};

export default createStatus;
