import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    gradeOfImportance: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

export const Article = mongoose.model("Article", articleSchema);
