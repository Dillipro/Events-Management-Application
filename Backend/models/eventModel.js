import mongoose, { mongo } from "mongoose";

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    objectives: {
      type: String,
      required: true,
    },

    outcomes: {
      type: String,
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "pending",
    },

    brochure: {
      data: Buffer,
      contentType: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

const event = mongoose.model("Event", eventSchema);
export default event;