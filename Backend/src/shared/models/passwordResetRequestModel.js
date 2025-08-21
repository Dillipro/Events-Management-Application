import mongoose from "mongoose";

const passwordResetRequestSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    requestedAt: {
      type: Date,
      default: Date.now
    },
    processedAt: {
      type: Date
    },
    processedBy: {
      type: String, // Admin email who processed the request
      default: null
    },
    reason: {
      type: String, // Reason for rejection (if applicable)
      default: null
    }
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
passwordResetRequestSchema.index({ email: 1, role: 1 });
passwordResetRequestSchema.index({ status: 1 });

const PasswordResetRequest = mongoose.model("PasswordResetRequest", passwordResetRequestSchema);

export default PasswordResetRequest;
