/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const handleMailChimpResponse = (errorMsg, successMsg) => {
    if (errorMsg) {
      // 4. If there was an error, update the message in state.
      setStatus({
        info: { error: true, msg: errorMsg },
      });

      return;
    }

    // 5. Clear the input value and show a success message.
    setStatus({
      submitted: true,
      submitting: false,
      info: { error: false, msg: successMsg },
    });
    inputEl.current.value = '';
  };

  const handleSendGridResponse = (status, msg) => {
    if (status === 200) {
      // 5. Clear the input value and show a success message.
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      inputEl.current.value = '';
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const subscribe = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    //for mailChimp integration
    const { error } = await res.json();
    handleMailChimpResponse(
      error,
      'Success! 🎉 You are now subscribed to the newsletter.'
    );
    // For sendGrid integration
    const text = await res.text();
    handleSendGridResponse(res.status, text);
  };

  return (
    <section id='contact'>
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <Heading as='h2' sx={styles.title}>
              Elevate your business and go to the next level
            </Heading>
            <Text as='p' sx={styles.description} style={{ padding: '1rem 0' }}>
              Are you ready to take your online presence to the next level? Look
              no further than our web development company. With a team of
              experts and cutting-edge solutions, we can help you achieve your
              digital goals and stand out in today's competitive online
              landscape.
            </Text>
            <form onSubmit={subscribe}>
              {/* Name */}
              <Input
                ref={inputEl}
                id='name'
                name='name'
                type='text'
                placeholder='Name*'
                sx={{
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  p: '2rem',
                  m: '1rem 0',
                  color: 'heading',
                  '::placeholder': {
                    color: '#D67028',
                  },
                }}
              />

              {/* Email */}
              <Input
                ref={inputEl}
                id='email'
                name='email'
                type='email'
                placeholder='Email*'
                sx={{
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  p: '2rem',
                  m: '1rem 0',
                  color: 'heading',
                  '::placeholder': {
                    color: '#D67028',
                  },
                }}
              />

              {/* Company Name */}
              <Input
                ref={inputEl}
                id='comapnyName'
                name='comapnyName'
                type='text'
                placeholder='Comapny Name*'
                sx={{
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  p: '2rem',
                  m: '1rem 0',
                  color: 'heading',
                  '::placeholder': {
                    color: '#D67028',
                  },
                }}
              />

              {/* Phone Number */}
              <Input
                ref={inputEl}
                id='phone'
                name='phone'
                type='phone'
                placeholder='Phone Number*'
                sx={{
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  p: '2rem',
                  m: '1rem 0',
                  color: 'heading',
                  '::placeholder': {
                    color: '#D67028',
                  },
                }}
              />

              {/* Type of service/project */}
              <Input
                ref={inputEl}
                id='typeOfProject'
                name='typeOfProject'
                type='text'
                placeholder='Type of service/project*'
                sx={{
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  p: '2rem',
                  m: '1rem 0',
                  color: 'heading',
                  '::placeholder': {
                    color: '#D67028',
                  },
                }}
              />

              {/* Message */}
              <textarea
                ref={inputEl}
                id='message'
                name='message'
                placeholder='Your message*'
                sx={{
                  width: '100%',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: ['14px', null, 2],
                  p: '2rem 2rem 1rem 2rem',
                  mb: '1rem',
                  color: 'heading',
                  outline: 'none',
                  '::placeholder': {
                    color: '#D67028',
                  },
                }}
              />

              <Button
                type='submit'
                disabled={status.submitting}
                aria-label='Send Message'
                sx={{
                  flexShrink: 0,
                  ml: [0, 2],
                  backgroundColor: '#fff',
                  mt: [2, 0],
                  py: ['15px'],
                  color: '#D67028',
                  boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.75)',
                  ':hover': {
                    color: '#fff',
                    boxShadow: '0px 1px 7px 1px rgba(0,0,0,0.75)',
                    backgroundColor: '#D67028',
                  },
                }}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Send Message'
                    : 'Submitted'
                  : 'Submitting...'}
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'primary',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: ['column', 'row'],
    '[type="email"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: 'body',
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'heading',
      py: 1,
      px: [4, null, 6],
      backgroundColor: ['white', 'transparent'],
      height: ['52px', null, '60px'],
      textAlign: ['center', 'left'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
      },
      '::placeholder': {
        color: 'primary',
        opacity: 1,
      },
    },
    '.subscribe__btn': {
      flexShrink: 0,
      ml: [0, 2],
      backgroundColor: ['text', 'primary'],
      mt: [2, 0],
      py: ['15px'],
    },
  },
};
