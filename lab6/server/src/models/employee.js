import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
	name: String,
	password: String,
	email: { type: String, unique: true },
});

export default mongoose.model('Employee', EmployeeSchema);
