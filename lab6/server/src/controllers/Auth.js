import generateToken from '../helpers/generateToken.js';
import Employee from '../models/employee.js';
import bcrypt from 'bcryptjs';
import { jwtDecode } from 'jwt-decode';

const authController = {
	login: async (req, res, next) => {
		try {
			const employee = await Employee.findOne({ email: req.body.email });

			if (!employee) {
				return res.status(404).json({
					success: false,
					message: 'User not found',
				});
			}

			if (
				employee &&
				bcrypt.compareSync(req.body.password, employee.password)
			) {
				const asscessToken = generateToken.accessToken(employee);
				const refreshToken = generateToken.refreshToken(employee);

				res.status(201).json({
					success: true,
					employee: employee,
					token: {
						accessToken: asscessToken,
						refreshToken: refreshToken,
					},
				});
			} else {
				return res.status(401).json({
					success: false,
					message: 'Password invalid',
				});
			}
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error,
			});
		}
	},

	register: async (req, res, next) => {
		try {
			const nameExit = await Employee.findOne({ name: req.body.name });
			const emailExit = await Employee.findOne({ email: req.body.email });
			console.log(nameExit);
			if (nameExit) {
				return res.status(409).json({
					success: false,
					message: 'Name already exists',
				});
			}

			if (emailExit) {
				return res.status(409).json({
					success: false,
					message: 'Email already exists',
				});
			}

			let employee = new Employee();

			employee.name = req.body.name;
			employee.email = req.body.email;
			employee.password = bcrypt.hashSync(req.body.password);

			await employee.save();

			res.status(201).json({
				success: true,
				employee: employee,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				message: "The employee can't be created",
				error: error.message, // Provide the error message for better clarity
			});
		}
	},

	refreshToken: async (req, res) => {
		const refreshToken = req.body.refreshToken;

		if (!refreshToken) return res.status(401).json("You're not authenticated");
		const decoded = jwtDecode(refreshToken);
		const { employeeId } = decoded;
		const employee = await Employee.findById(employeeId);

		if (employee.refreshToken != refreshToken) {
			return res.status(403).json('Refresh token is not valid');
		}

		const newAccessToken = generateToken.accessToken(employee);

		res.status(200).json({
			accessToken: newAccessToken,
		});
	},
};

export default authController;
