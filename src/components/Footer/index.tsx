import React from 'react';
import './styles.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

interface FooterProps {
  fixed: boolean;
}

const Footer: React.FC<FooterProps> = ({ fixed }) => {
  return (
    <footer className={`footer ${fixed ? 'footer__fixed' : ''}`}>
      <section>
        <p>Desenvolvido por Lucas Viana Cunha</p>
      </section>
      <section>
        {/* <span> */}
        <AiFillLinkedin className="footer__icons" />
        {/* </span> */}
        {/* <span> */}
        <AiFillGithub className="footer__icons" />
        {/* </span> */}
      </section>
    </footer>
  );
};

export default Footer;
