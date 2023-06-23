const getVercelPreviewUrl = () => {
  return `https://${
    process.env.VERCEL_GIT_REPO_SLUG
  }-git-${process.env.VERCEL_GIT_COMMIT_REF.replace(
    new RegExp("/", "g"),
    "-"
  )}-${process.env.VERCEL_GIT_REPO_OWNER}.vercel.app`;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    APP_URL: process.env.APP_URL || getVercelPreviewUrl(),
  },
};

module.exports = nextConfig;
