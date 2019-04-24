const createStatus = status => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("statuses")
      .add({
        ...status,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
