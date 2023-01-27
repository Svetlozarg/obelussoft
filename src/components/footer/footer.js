/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import LogoDark from 'assets/obelussoft-logo.svg';
import Logo from 'components/logo';
import Linkedin from 'assets/linkedin.svg';
import Facebook from 'assets/facebook.svg';
import Instagram from 'assets/instagram.svg';
import Email from 'assets/email.svg';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
            >
              <Image
                src={item.iconSrc}
                alt={item.altText}
                style={{ width: '95px', height: '95px' }}
              />
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as='h3'>{item.title}</Heading>
                <Text as='p'>{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Link path='/' style={{ textDecoration: 'none' }}>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Logo style={{ width: '40px', height: '40px' }} src={LogoDark} />
              <Text
                style={{ fontSize: '1.8rem', fontWeight: '500', color: '#000' }}
              >
                Obelus
                <span style={{ color: '#D67028' }}>Soft</span>
              </Text>
            </Box>
          </Link>
          <Box>
            <nav
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: '1rem 0',
              }}
            >
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                  path={path}
                  key={i}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link path='/'>
              <Image
                src={Linkedin}
                alt='Linkedin Image'
                sx={{ widget: '50px', height: '50px' }}
              />
            </Link>
            <Link path='/'>
              <Image
                src={Facebook}
                alt='Facebook Image'
                sx={{ widget: '50px', height: '50px' }}
              />
            </Link>
            <Link path='/'>
              <Image
                src={Instagram}
                alt='Instagram Image'
                sx={{ widget: '50px', height: '50px' }}
              />
            </Link>
            <Link path='/'>
              <Image
                src={Email}
                alt='Email Image'
                sx={{ widget: '50px', height: '50px' }}
              />
            </Link>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} ObelusSoft
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
