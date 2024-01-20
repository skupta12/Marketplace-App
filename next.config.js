/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats:['image/webp'],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "marketplace-app-production-b024.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;
