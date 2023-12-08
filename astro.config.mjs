import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Bitbucket Integration',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/bitbucket-github/getting-started/' },
						{ label: 'Shopify Store Setup', link: '/bitbucket-github/store-setup/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
