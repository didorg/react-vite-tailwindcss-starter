import { facebook, linkedin, twitter } from '../assets/icons';

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const footerLinks = [
  {
    title: 'FAQ',
    links: [
      { name: 'Starter Originals', to: '/' },
      { name: 'Investor Relations', to: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'How it works', to: '/' },
      { name: 'Terms Of Use', to: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@starter.com', to: '/' },
      { name: '+1 (813) STA-RTER', to: '/' },
    ],
  },
];

export const socialMedia = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: twitter,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: facebook,
  },
];
