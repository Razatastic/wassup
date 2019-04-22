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
      break;
    default:
      console.log("Default");
  }
  return state;
};

export default statusReducer;
