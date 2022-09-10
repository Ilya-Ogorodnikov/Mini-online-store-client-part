import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { IFooterProps } from '../../models';
import { footerLinks } from '../../constants';
import * as img from '../../assets';
import { styles } from './style';

const Footer: FC<IFooterProps> = ({ isAuth }) => (
  <Box sx={styles.footer}>
    <Box sx={styles.footerInner}>
      <img 
        style={styles.footerLogo}
        src={img.logo}
        alt="logo"
      />

      {isAuth &&
        <Box sx={styles.footerLinks}>
          {footerLinks.map(link => (
            <Link
              key={link.title}
              to={{pathname: link.to}}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h6"
                component="p"
                sx={styles.footerLinkTitle}
              >
                {link.title}
              </Typography>
            </Link>
          ))}
        </Box>
      }
    </Box>

    <Typography
      variant="h6"
      component="p"
      sx={styles.footerCopyright}
    >
      All rights reserved 2022 @Fortech
    </Typography>
  </Box>
);

export default Footer;