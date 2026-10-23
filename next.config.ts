import type { NextConfig } from "next";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const usesCustomDomain = configuredUrl
  ? !new URL(configuredUrl).hostname.endsWith("github.io")
  : false;
const basePath =
  process.env.GITHUB_ACTIONS === "true" &&
  repositoryName &&
  !repositoryName.endsWith(".github.io") &&
  !usesCustomDomain
    ? `/${repositoryName}`
    : "";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
