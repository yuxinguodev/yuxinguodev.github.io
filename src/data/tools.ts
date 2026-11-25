// Tools listed on the Tools page and the home page.
export interface Tool {
	href: string;
	title: string;
	note: string;
	tag: string;
}

export const TOOLS: Tool[] = [
	{ href: '/tools/galette', title: 'Galette', note: 'Game colours, copied as engine code.', tag: 'Colour' },
];
