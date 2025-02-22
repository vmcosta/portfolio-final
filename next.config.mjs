/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three', 'three-globe'],
    webpack: (config, { isServer }) => {
        // Prevent server-side lottie-web import
        if (isServer) {
            config.externals = [...(config.externals || []), 'lottie-web'];
        }

        return config;
    },
};

export default nextConfig;