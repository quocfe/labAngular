import blogRoutes from './blog.js';
import authRoutes from './auth.js';

function routes(app) {
	app.use(`/v1/api/blog`, blogRoutes);
	app.use(`/v1/api/auth`, authRoutes);
}

export default routes;
