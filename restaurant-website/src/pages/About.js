import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <p>
          Welcome to [Your Restaurant Name], where culinary artistry meets a
          warm and inviting atmosphere. Nestled in the heart of [Your City], our
          restaurant offers an unforgettable dining experience for every
          occasion. Our talented chefs craft each dish with passion and
          precision, using only the finest, locally sourced ingredients to
          create a menu that celebrates both classic and innovative flavors.
          Whether you're joining us for a romantic dinner, a casual lunch, or a
          special celebration, our friendly and knowledgeable staff is here to
          ensure your visit is a memorable one. With a carefully curated wine
          list and an array of handcrafted cocktails, we're ready to complement
          your meal with the perfect beverage. At [Your Restaurant Name], we
          take pride in offering a dining experience that tantalizes the senses
          and creates lasting memories. Come savor the essence of good food,
          good company, and good times.
        </p>
        <br />
        <p>
          Indulge in the epitome of culinary excellence at [Your Restaurant
          Name]. Our dedication to quality extends beyond our carefully crafted
          menu to our elegant and inviting ambiance. As you step into our
          restaurant, you'll be greeted by the soft glow of ambient lighting,
          the soothing hum of conversation, and a sense of sophistication that
          makes any visit a special occasion. Our commitment to outstanding
          service means your every need will be catered to, ensuring a seamless
          and enjoyable dining experience. Whether you're seated in our cozy
          booths, at the bar, or on our spacious outdoor patio, each moment at
          [Your Restaurant Name] is designed to transport you to a world of
          gastronomic delight. We invite you to join us, savor the art of
          cuisine, and make each visit an unforgettable journey through flavors,
          textures, and sensations.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
