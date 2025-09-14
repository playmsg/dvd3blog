import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),

    // --- 修改开始 ---

    // 1. 让 description 字段变成可选的
    description: z.string().optional(),

    // 2. 将 'pubDate' 重命名为 'date' 来匹配你的文章
    date: z.coerce.date(),

    // --- 修改结束 ---

    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  })
  // 3. 允许 schema 中未定义的字段 (比如 'categories') 通过验证，不报错
  .passthrough(),
});

export const collections = { blog };