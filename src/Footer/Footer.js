import './Footer.css';

function Footer() {
    const year = (new Date()).getFullYear();
  return (
    <div id="footer">
    <p>Copyright © {year} MISS JUNE</p>
    </div>
  );
}

export default Footer;
