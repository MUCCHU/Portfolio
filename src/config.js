module.exports = {
  email: 'harshwasnik160602@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/MUCCHU',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mucchu1606',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/HarshWasnik1606',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/harsh-wasnik-60b63b1b9/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/javagenuis',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Hackathons',
      url: '/#hackathons',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'PORs',
      url: '/#pors',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
