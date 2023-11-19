import { remark } from 'remark';
import html from 'remark-html';
import * as matter from 'gray-matter';

export const fetchBlogData = async (url) => {
  try {
    const response = await fetch(url, {
      cache: 'no-store', 
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await   response.json();
    const blogArray = await Promise.all(data.data.map(async (item) => {
      const id = item.id;
      const attributes = item.attributes;
      const { contentHtml, contentMetadata } = await processMarkdown(attributes.Travel);
      return { contentHtml, contentMetadata, id };
    }));

    return blogArray;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPostData = async (url) => {
  try {
    const response = await fetch(url, {
      cache: 'no-store', 
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await response.json();
    const id = data.data.id;
    const attributes = data.data.attributes;
    const { contentHtml, contentMetadata } = await processMarkdown(attributes.Travel);

    const blogArray = { contentHtml, contentMetadata, id };
    return blogArray;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const processMarkdown = async (markdown) => {
  const matterResult = matter(markdown);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return { contentHtml, contentMetadata: matterResult.data };
};
