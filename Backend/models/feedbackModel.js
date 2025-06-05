import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    participantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
      required: true,
    },

    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const feedback = mongoose.model("Feedback", feedbackSchema);
export default feedback;
