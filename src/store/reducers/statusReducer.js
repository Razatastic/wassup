const initState = {
  statuses: [
    { id: "1", title: "Lost in the woods", content: "Testing 123" },
    { id: "2", title: "Humpty", content: "Testing yo" },
    { id: "3", title: "Dumpty", content: "Testing oy" }
  ]
};

const statusReducer = (state = initState, action) => {
  return state;
};

export default statusReducer;
