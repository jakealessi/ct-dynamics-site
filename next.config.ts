import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repositoryName.endsWith(".github.io");
const githubPagesBasePath =
  isGitHubPagesBuild && repositoryName && !isUserSite
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPagesBasePath,
  },
};

export default nextConfig;
