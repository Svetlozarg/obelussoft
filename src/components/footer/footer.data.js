import quality from 'assets/widget/quality.svg';
import customization from 'assets/widget/customization.svg';
import support from 'assets/widget/support.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: quality,
      altText: 'Experience',
      title: 'Experience',
      description:
        'Proven track record of delivering high-quality, functional websites by experienced developers.',
    },
    {
      id: 2,
      iconSrc: customization,
      altText: 'Customization',
      title: 'Customization',
      description:
        'Customized solutions tailored to unique client needs through close collaboration and understanding.',
    },
    {
      id: 3,
      iconSrc: support,
      altText: 'Support',
      title: 'Support',
      description:
        'Ongoing support for smooth, effective website function, including troubleshooting & updates.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/#aboutUs',
      label: 'About Us',
    },
    {
      path: '/#services',
      label: 'Services',
    },
    {
      path: '/#expertise',
      label: 'Expertise',
    },
    {
      path: '/#approach',
      label: 'Approach',
    },
    {
      path: '/#portfolio',
      label: 'Portfolio',
    },
  ],
};
