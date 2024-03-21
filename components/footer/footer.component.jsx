import "./footer.styles.css";

function Footer() {
  return (
    <>
      <footer>
        <div id="footer" className="footer-container">
          <div className="left-footer">
            <img src="./just_coca.png" alt="Coca Logo" />

            <div className="serv">
              <h2>Reclame</h2>
              <p>Vrei o reclama pentru produsul/proiectul/serviciul tau?</p>
            </div>
            <div className="serv">
              <h2>Interviuri</h2>
              <p>Ai nevoie de testimoniale sau un documentar?</p>
            </div>
            <div className="serv">
              <h2>Prezentari</h2>
              <p>Vrei sa convingi clientii cu un vdeo captivant?</p>
            </div>
            <div className="serv">
              <h2>Continut</h2>
              <p>Ai nevoie sa iti cresti prezenta online?</p>
            </div>
          </div>

          <div className="right-footer">
            <div className="left">Contacteaza-ne si gasim solutia perfecta pentru tine.</div>
            <div className="right">
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
