const SKILLS = [
  'CSS',
  'JavaScript',
  'Node.js',
  'PHP',
  'AWS',
  'SEO',
];

export default defineAppConfig({
  seo: {
    title: 'Rocky Liu (@6chinwei) - A Web-Tech Pathfinder transforming challenges into elegant solutions',
    description: `Hello! I’m Rocky Liu (@6chinwei), a Web-Tech Pathfinder transforming challenges into elegant solutions. Specializing in ${ SKILLS.join(' / ') }`,
    keywords: `Rocky Liu, 6chinwei, Full-Stack Developer, Web-Tech Pathfinder, Elegant Web Solutions, ${ SKILLS.join(', ') }`,
  },

  skills: SKILLS,

  contactList: [
    {
      type: 'codepen',
      text: 'Codepen',
      url: 'https://codepen.io/6chinwei',
    },
    {
      type: 'linkedin',
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/6chinwei/',
    },
    {
      type: 'github',
      text: 'Github',
      url: 'https://github.com/6chinwei',
    },
    {
      type: 'mail',
      text: 'Mail',
      url: 'mailto:6chinwei@gmail.com',
    },
  ]
});
