const createStatus = status => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("statuses")
      .add({
        ...status,
        authorFirstName: "john",
        authorLastName: "doe",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_STATUS", status });
      })
      .catch(err => {
        dispatch({ type: "CREATE_STATUS_ERROR", err });
      });
  };
};

export default createStatus;
