import mongoose from "mongoose";

// make a sessions schema
//user for making a session into a db
// each session needs a problem, difficiulty, host, participany, status and stream Call ID 

const sessionSchema = new mongoose.Schema(
  {
    problem: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    // stream video call ID
    callId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

//model is based off the sessionSchema, you use the model to create an object based off the schema
const Session = mongoose.model("Session", sessionSchema);

export default Session;
