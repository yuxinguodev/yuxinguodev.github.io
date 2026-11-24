import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const projects = defineCollection({
	// 读取 src/content/projects/ 文件夹里的所有 .md 文件
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// 规定每个项目的 frontmatter 字段
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		cover: z.string().optional(),      // GIF/图片路径，可以先不填
		tags: z.array(z.string()),
		github: z.string().optional(),
		status: z.enum(['in-progress', 'completed']).default('in-progress'),
		featured: z.boolean().default(false), // 是否显示在首页
		order: z.number().default(0),          // 排序，数字小的排前面
	}),
});

export const collections = { blog, projects };
