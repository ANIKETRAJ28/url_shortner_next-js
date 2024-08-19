import mongoose, {model, Document, Schema, Model} from "mongoose";

const urlSchema = new mongoose.Schema({
    original: {
        type: String,
        unique: true
    },
    shortUrl: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

// export default mongoose.model("uls", urlSchema);
export interface IUrl extends Document {
    originalUrl: string,
    shortUrl: string
};

const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>("Url", urlSchema);

export default Url;