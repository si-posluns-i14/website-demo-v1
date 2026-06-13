/** @type {import('next').NextConfig} */

// On GitHub Pages project sites the app is served from /<repo-name>.
// The deploy workflow passes the repo name in PAGES_BASE_PATH so the
// basePath/assetPrefix match automatically. Locally it's unset, so the
// dev server runs at the root (http://localhost:3000) as normal.
const repo = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export", // emit a static site into ./out for GitHub Pages
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",
  images: { unoptimized: true }, // next/image needs this for static export
  trailingSlash: true, // friendlier URLs on static hosts
};

export default nextConfig;
