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
        <a
          href="https://www.linkedin.com/in/lucas-viana-cunha-/"
          target="__blank"
        >
          <AiFillLinkedin className="footer__icons" />
        </a>
        <a href="https://github.com/LucasViana1" target="__blank">
          <AiFillGithub className="footer__icons" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
