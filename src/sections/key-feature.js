/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Web Design',
    title: 'Web Design',
    text: 'Our web design process is thorough and efficient. We begin by understanding your business goals and objectives, researching your target audience, and analyzing your competitors. We then create wireframes and design a visually stunning, user-friendly interface. After your approval, we move on to development.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Front-End Development',
    title: 'Front-End Development',
    text: 'Our front-end development process is focused on creating an intuitive and seamless user experience. We build the front-end using the latest technologies, ensuring that it is responsive, interactive and visually appealing.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Back-End Development',
    title: 'Back-End Development',
    text: 'Our back-end development process is focused on creating a robust and reliable foundation for your web application. We start by understanding the requirements and designing a scalable and efficient architecture. We develop the back-end ensuring that it integrates seamlessly with the front-end, and implementing security measures to protect the data.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'SEO & Marketing',
    title: 'SEO & Marketing',
    text: "Our SEO and marketing process is designed to help your business reach its full potential online. We begin by researching your target audience, analyzing competition and optimizing website's content, meta tags, and images for search engines. We also focus on building high-quality backlinks, creating valuable content, and leveraging social media to increase your visibility and drive conversions.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='feature'>
      <Container>
        <SectionHeader
          slogan='Our Approach'
          title="Design-driven approach for business growth, that's what we aim for"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
