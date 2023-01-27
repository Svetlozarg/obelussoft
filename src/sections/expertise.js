/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

import discovery from '../assets/feature/discovery.svg';
import strategy from '../assets/feature/strategy.svg';
import solutions from '../assets/feature/solutions.svg';
import responsive from '../assets/feature/responsive.svg';
import enterprise from '../assets/feature/enterprise.svg';
import marketing from '../assets/feature/marketing.svg';

const data = [
  {
    id: 1,
    imgSrc: discovery,
    altText: 'Discovery',
    title: 'Discovery',
    text: 'The foundation of every successful digital solution we create is a comprehensive discovery process. Knowing your target audience and the purpose of the project is crucial before even considering design elements or technology. Without this understanding, all other efforts are futile.',
  },
  {
    id: 2,
    imgSrc: strategy,
    altText: 'Strategy & Planning',
    title: 'Strategy & Planning',
    text: 'Strategic planning is the key to success. As digital consumer needs are constantly evolving, having the expertise and experience to develop a sound strategy for your business to address your digital challenges is essential.',
  },
  {
    id: 3,
    imgSrc: solutions,
    altText: 'Website Solutions',
    title: 'Website Solutions',
    text: 'Web design and development is at the core of our expertise. Crafting visually stunning and technically sound solutions that can adapt to different screen sizes and devices requires precision, and our hand-crafted, cutting-edge online solutions are unparalleled in the industry.',
  },
  {
    id: 4,
    imgSrc: responsive,
    altText: 'Mobile & Tablet Solutions',
    title: 'Mobile & Tablet Solutions',
    text: '"Creating a captivating user experience across all mobile devices is our area of expertise. We are well-versed in industry best practices and have the knowledge and skills to push the boundaries and deliver exceptional results.',
  },
  {
    id: 5,
    imgSrc: enterprise,
    altText: 'Enterprise CMS Solutions',
    title: 'Enterprise CMS Solutions',
    text: 'If you seek to harness the capabilities and efficiencies of enterprise content management systems, look no further. Our enterprise solutions provide you the ability to leverage powerful enterprise content management platforms to benefit your business.',
  },
  {
    id: 6,
    imgSrc: marketing,
    altText: 'Digital Marketing',
    title: 'Digital Marketing',
    text: 'You have invested significant time and resources in building your business to where it stands today. Allow us to assist you in taking it to the next level with our digital marketing strategies. We will ensure that your business receives the exposure it deserves to thrive.',
  },
];

export default function Feature() {
  return (
    <section
      id='expertise'
      sx={{ variant: 'section.feature' }}
      style={{ paddingTop: '2rem' }}
    >
      <Container>
        <SectionHeader
          slogan='expertise'
          title='Innovative Web Design Services for Exceptional User Experience'
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
