import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  FooterLogo,
  FooterLogoBox,
} from './FooterElements';
import logo from '../../images/4.png';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <FooterLogoBox>
              <FooterLogo src={logo} alt='logo' />
            </FooterLogoBox>
            <SocialIcons>
              <SocialIconLink href='/' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <div style={{ margin: '1rem 0' }}>
          <SocialIconLink href='https://arsalan-najm.web.app/' target='_blank'>
            <p style={{ color: '#fff' }}>By Arsalan Najm</p>
          </SocialIconLink>
        </div>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
