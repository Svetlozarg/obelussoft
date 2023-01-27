/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: 'About us',
  title: 'Transform your website, transform your business',
  description:
    'ObelusSoft is a web development company that specializes in creating custom websites and web applications. Our team at ObelusSoft has a wealth of experience in various web development technologies and is dedicated to delivering high-quality solutions that meet the unique needs of each client. With a focus on user-centered design and a commitment to staying up-to-date with the latest web development trends, ObelusSoft is the perfect partner for your next web development project.',
  btnName: 'Contact Us',
  btnURL: '#contact',
};

export default function CoreFeature() {
  return (
    <section
      sx={{ variant: 'section.coreFeature' }}
      style={{ paddingTop: '120px' }}
      id='aboutUs'
    >
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt='Thumbnail' />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='Shape' />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
