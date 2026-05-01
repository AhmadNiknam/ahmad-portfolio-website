import type { MetadataRoute } from "next";

const baseUrl = "https://ahmadniknam.com";

const routes = [
  baseUrl,
  `${baseUrl}/#about`,
  `${baseUrl}/#skills`,
  `${baseUrl}/#projects`,
  `${baseUrl}/#experience`,
  `${baseUrl}/#web-services`,
  `${baseUrl}/#contact`
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((url) => ({
    url
  }));
}
