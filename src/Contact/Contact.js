import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="section-padding">
        <div className="section-title-wrapper">
          <h1 className="section-title">CONTACT</h1>
        </div>

        <div className="contact-details-wrapper">
          <h3 className="white-bg">MANAGEMENT</h3>
          <p className="white-bg">CRS Music Management</p>
          <p className="white-bg">campbell@campbellsmith.org.nz</p>

          <h3 className="white-bg">BOOKINGS</h3>
          <p className="white-bg">CRS Management (NZ)</p>
          <p className="white-bg">campbell@campbellsmith.org.nz</p>
          <br/>
          <p className="white-bg">Select Music (AU)</p>
          <p className="white-bg">casey@selectmusic.com.au</p>
          <br/>
          <p className="white-bg">CAA (EU/UK)</p>
          <p className="white-bg">andy.cook@caa.com</p>

          <h3 className="white-bg">LABEL</h3>
          <p className="white-bg">Frenchkiss Records</p>
       </div>
      </div>
    </section>
  );
}

export default Contact;
