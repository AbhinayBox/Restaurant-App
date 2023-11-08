import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant="h4">Contact my Restaurant</Typography>
        <p>
          Contacting [Your Restaurant Name] is easy, and we're always here to
          assist you. Whether you have a question, want to make a reservation,
          or provide feedback on your dining experience, we're just a phone call
          or email away. Our friendly and attentive staff is ready to address
          your inquiries and ensure your visit is nothing short of exceptional.
          You can reach us at [Your Phone Number] during our regular business
          hours, or send us an email at [Your Email Address]. We value your
          input and look forward to hearing from you. Your feedback and
          communication are vital in our ongoing commitment to delivering the
          best possible dining experience at [Your Restaurant Name].
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: '600px',
          ml: 10,
          '@media (max-width:600px)': {
            width: '300px',
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: 'black', color: 'white' }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} />
                  1800-000-00(tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: 'skyblue', pt: 1 }} />
                  help@rest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} />
                  123456789
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
