import mongoose from "mongoose";

const participantEventSchema = mongoose.Schema(
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

    attended: {
      type: Boolean,
    },

    feedbackGiven: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const participantEvent = mongoose.model(
  "ParticipantEvent",
  participantEventSchema
);
export default participantEvent;