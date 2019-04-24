const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// Populates notifications collection with a new notification document
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("Notifcation added", doc));
};

// Function that reacts to new status being created
// We use template syntax / backticks for user info
exports.statusCreated = functions.firestore
  .document("statuses/{statusId}")
  .onCreate(doc => {
    const status = doc.data();
    const notification = {
      content: "Added a new status",
      user: `${status.authorFirstName} ${status.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

// Function that reacts to a new user joining
exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the wave",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    });
});
