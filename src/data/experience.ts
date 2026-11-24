// Entries for the "Experience" timeline on the homepage, newest first.
// TODO: replace these placeholders with real entries before publishing.

export interface ExperienceEntry {
	period: string; // e.g. "2025 — Present" or "Mar 2024 — Nov 2024"
	title: string; // role, degree or achievement
	org: string; // company, school, event
	location?: string;
	description?: string;
	tags?: string[];
	current?: boolean; // highlights the dot on the timeline
	kind?: 'education' | 'game'; // education = green highlight, game = red highlight
}

export const experience: ExperienceEntry[] = [
	{
		period: 'Jul 2026 — Jun 2029 (expected)',
		title: 'Bachelor of Software Engineering (Game Programming)',
		org: 'Media Design School',
		kind: 'education',
		location: 'Auckland, NZ',
		current: true,
	},
	{
		period: '[Month Year]',
		title: '[Game jam / competition name]',
		org: '[Team or event]',
		kind: 'game',
		description: '[What you built, your role, and the result.]',
		tags: ['Unity', 'C#'],
	},
	{
		period: 'Sep 2018 — Mar 2025',
		title: 'Landscape Designer / Interior Decoration Designer',
		org: "Jiang'an Liya Zhuyuan Real Estate Co., Ltd.",
	},
	{
		period: 'May 2017 — May 2018',
		title: 'Landscape Designer',
		org: 'Sichuan Guoheng Architectural Design Co., Ltd.',
	},
	{
		period: 'Oct 2014 — Apr 2017',
		title: 'Assistant Landscape Designer',
		org: 'Chengdu Xixi Landscape Planning and Design Co., Ltd.',
	},
	{
		period: 'Sep 2011 — Jun 2015',
		title: 'Bachelor of Arts in Art Design (Landscape Architecture)',
		org: 'College of Arts and Sciences, Sichuan Normal University',
		kind: 'education',
	},
	{
		period: 'Jun 2013 — Sep 2014',
		title: 'Landscape Design Intern',
		org: 'Sichuan Xinhengsheng Real Estate Co., Ltd.',
		location: 'Chengdu, China',
	},
];
