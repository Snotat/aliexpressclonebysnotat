module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "ae01.alicdn.com",
                port: ''
            },
            {
                protocol: 'https',
                hostname: "ae-pic-a1.aliexpress-media.com",
                port: ''
            },
            {
                protocol: 'https',
                hostname: "unsplash.com",
                port: ''
            },
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
                port: ''
            },
            {
                hostname: "127.0.0.1",
                port: "3000",
            }
        ],
    }, experimental: {
        missingSuspenseWithCSRBailout: false,
    },
}
