const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://vladikon:aDLzIke3DdmWnygh@cluster0.kv8pcea.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// aDLzIke3DdmWnygh
