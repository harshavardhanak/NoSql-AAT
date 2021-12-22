const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(
      "mongodb+srv://harshakhv:9741722649@cluster0.gti1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
 
    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
