// Entries for the "Experience" timeline on the homepage, newest first.
// TODO: replace these placeholders with real entries before publishing.

export interface ExperienceEntry {
	period: string; // e.g. "2025 — Present" or "Mar 2024 — Nov 2024"
	title: string; // role, degree or achievement
	org: string; // company, school, event
	location?: string;
	description: string;
	tags?: string[];
	current?: boolean; // highlights the dot on the timeline
}

export const experience: ExperienceEntry[] = [
	{
		period: '2025 — Present',
		title: '[Degree] in Game Programming',
		org: '[School name]',
		location: 'Auckland, NZ',
		description: '[One or two lines about what you study and focus on, e.g. engine architecture, gameplay systems, C++.]',
		tags: ['C++', 'Game engines', 'Gameplay'],
		current: true,
	},
	{
		period: '[Month Year]',
		title: '[Game jam / competition name]',
		org: '[Team or event]',
		description: '[What you built, your role, and the result.]',
		tags: ['Unity', 'C#'],
	},
	{
		period: '[Year — Year]',
		title: '[Previous role or study]',
		org: '[Organisation]',
		location: '[City]',
		description: '[What you did and what you learned that carries into game programming.]',
	},
];
