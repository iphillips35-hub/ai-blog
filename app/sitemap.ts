import type { MetadataRoute } from "next";
import { blogPosts, categorySlug, getCategories } from "@/data/blogPosts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog", "/tools", "/about", "/newsletter"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const categories = getCategories().map((category) => ({
    url: `${SITE_URL}/blog/category/${categorySlug(category)}`,
  }));

  return [...staticPages, ...posts, ...categories];
}
