import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';

import { Container } from "@material-ui/core";



const Footer = (props) => {
 
  return (
   
    <Container className={props.className} >
    <Typography display='block' variant="body2" color="textSecondary" >
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Icon icon={githubIcon}
        width='1.5em'
        height='1.5em'
      />{' '}
      <Link color="inherit" href="https://github.com/tt70629">
        tt70629
      </Link>{' '}
    </Typography>
    </Container>
    
  );
}

export default Footer;