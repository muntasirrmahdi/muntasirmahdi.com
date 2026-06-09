export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "postType",
      title: "Post Type",
      type: "string",
      options: {
        list: [
          { title: "Thought (Micro Post)", value: "thought" },
          { title: "Article (Long Form)", value: "article" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Bangla", value: "bn" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      description: "Estimated reading time in minutes",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Short description shown in blog listings (max 200 chars)",
      rows: 3,
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "postType",
      language: "language",
      media: "mainImage",
    },
    prepare({ title, subtitle, language }: Record<string, any>) {
      return {
        title,
        subtitle: `${subtitle === "thought" ? "Thought" : "Article"} — ${language === "bn" ? "বাংলা" : "ENG"}`,
      };
    },
  },
};
