import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
	title: String,
	content: String,
});

export default mongoose.model('Blog', BlogSchema);
