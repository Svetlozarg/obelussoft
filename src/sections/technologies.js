/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';

import reactIcon from 'assets/technologies/react-icon.svg';
import vueIcon from 'assets/technologies/vue-icon.svg';
import nextIcon from 'assets/technologies/next-icon.svg';
import nodeIcon from 'assets/technologies/node-icon.svg';
import phpIcon from 'assets/technologies/php-icon.svg';
import pythonIcon from 'assets/technologies/python-icon.svg';
import javaIcon from 'assets/technologies/java-icon.svg';
import wordpressIcon from 'assets/technologies/wordpress-icon.svg';
import shopifyIcon from 'assets/technologies/shopify-icon.svg';

const data = [
  {
    id: 1,
    imgSrc: reactIcon,
    designation: 'React.JS',
  },
  {
    id: 2,
    imgSrc: vueIcon,
    designation: 'Vue.JS',
  },
  {
    id: 3,
    imgSrc: nextIcon,
    designation: 'Next.JS',
  },
  {
    id: 4,
    imgSrc: nodeIcon,
    designation: 'Node.JS',
  },
  {
    id: 5,
    imgSrc: phpIcon,
    designation: 'PHP',
  },
  {
    id: 6,
    imgSrc: pythonIcon,
    designation: 'Python',
  },
  {
    id: 7,
    imgSrc: javaIcon,
    designation: 'Java',
  },
  {
    id: 8,
    imgSrc: wordpressIcon,
    designation: 'WordPress',
  },
  {
    id: 9,
    imgSrc: shopifyIcon,
    designation: 'Shopify',
  },
];

export default function TeamSection() {
  return (
    <section style={{ paddingTop: '4rem' }}>
      <Container>
        <SectionHeader slogan='technologies' title='Technologies We Utilize' />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              designation={item.designation}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
