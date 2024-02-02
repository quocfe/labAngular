import Blog from '../models/blog.js';

const blogController = {
	save: async (req, res, next) => {
		let blog = new Blog();

		blog.title = req.body.title;
		blog.content = req.body.content;

		try {
			await blog.save();
			res.status(201).json({
				success: true,
				data: blog,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				message: "The blog can't be created",
				error: error,
			});
		}
	},
	find: async (req, res, next) => {
		try {
			const blogList = await Blog.find();
			res.status(200).json({
				message: 'find success',
				data: blogList,
			});
		} catch (error) {
			res.status(500).json({
				message: 'find faild',
				error: error,
			});
		}
	},
	findOne: async (req, res, next) => {
		try {
			const project = await Blog.findById(req.params.id);
			res.status(200).json({
				message: 'find success',
				data: project,
			});
		} catch (error) {
			res.status(500).json({
				message: 'find faild',
				error: error,
			});
		}
	},
	delete: async (req, res, next) => {
		const _id = req.params.id;
		try {
			await Blog.deleteOne({ _id: _id });
			res.status(201).json({
				success: true,
				message: 'delete success',
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				message: 'delete false',
			});
		}
	},
	update: async (req, res, next) => {
		const _id = req.params.id;
		const blogExit = await Blog.findById(_id);

		if (!blogExit)
			return res.status(500).json({
				success: false,
				message: 'No blog existed',
			});

		const newBlog = {
			title: req.body.title,
			content: req.body.content,
		};

		try {
			const blog = await Blog.findByIdAndUpdate(_id, newBlog, {
				new: true,
			});
			res.status(201).json({
				success: true,
				data: blog,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				message: "The project can't be update",
				error: error,
			});
		}
	},
};

export default blogController;
