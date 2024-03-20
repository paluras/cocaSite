import "./footer.styles.css";

function Footer() {
  return (
    <>
      <footer>
        <div id="footer" className="footer-container">
          <div className="left-footer">
            <img src="./just_coca.png" alt="Coca Logo" />
            <div>
              Adăugând magie viziunii tale, transformăm ideile în realitate cu
              un vibe autentic, fresh și o atitudine care sparge barierele
              convenționalului.
            </div>
          </div>
          <div className="right-footer">
            <div className="telefon">
              <a href="tel:+075366412332">Whatsapp</a>
            </div>
            <div className="mail">
              <a href="mailto:someone@yoursite.com">Mail</a>{" "}
            </div>
            <div className="youtube">
              <a
                href="https://www.youtube.com/@cocaproduction"
                rel="noreferrer"
                target="_blank"
              >
                Youtube
              </a>
            </div>
            <div className="insta">
              <a
                href="https://instagram.com/cocaproductionfilm?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div className="facebook">
              <a
                href="https://www.facebook.com/profile.php?id=100083285113494"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
