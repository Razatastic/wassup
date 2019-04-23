const initState = {
  statuses: [
    { id: "1", title: "Lost in the woods", content: "Testing 123" },
    { id: "2", title: "Humpty", content: "Testing yo" },
    { id: "3", title: "Dumpty", content: "Testing oy" }
  ]
};

const statusReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_STATUS":
      console.log("Created status", action.status);
      return state;
    case "CREATE_STATUS_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default statusReducer;
