import "./style.css";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const form = useRef();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("cocaproduction", "template_oaag6bf", form.current, {
        publicKey: "lQgzbwC-oiOa-IoYc",
      })
      .then(
        () => {
          setShowSuccessPopup(true);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showSuccessPopup]);

  return (
    <main>
      {showSuccessPopup && (
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "black",
            padding: "20px",
            borderRadius: "5px",
            border: "1px solid #d6e9c6",
          }}
        >
          Mesaj trimis!
        </div>
      )}
      <section className="contact-container">
        <div className="form-container">
          <h1>Contacteaza-ne</h1>
          <p>
            Daca ai o intrebare , trimite-ne un mesaj si revenim cu un raspuns
            cat se poate de repede
          </p>
          <br />
          <p>
            Trimite mail direct la :<a> office@cocaproduction.com</a>
          </p>
          <br />
          <p>Sau completeaza formularul:</p>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Nume</label>
            <input
              placeholder="Nume Prenume"
              type="text"
              id="name"
              name="name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              placeholder="email@mail.com"
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="message">Mesaj</label>
            <textarea
              cols={20}
              rows={10}
              type="text"
              id="message"
              name="message"
              required
            />
            <label  className="require"  htmlFor="check">
              Confidențialitatea dumneavoastră este importantă pentru noi.
              Informațiile pe care le trimiteți prin acest formular vor fi
              folosite doar pentru a vă contacta în răspuns la solicitarea
              dumneavoastră. Prin trimiterea detaliilor dumneavoastră, sunteți
              de acord cu utilizarea informațiilor dumneavoastră în acest scop.
           
            <input required type="checkbox" name="check" id="check" />
            </label>
            <button type="submit">Trimite</button>
          </form>
        </div>

        {/* <div className="socials">
          <h2>Socials</h2>
          <div className="socials-container">
            <a href="tel:+075366412332">Whatsapp</a>
            <a
              href="https://www.youtube.com/@cocaproduction"
              rel="noreferrer"
              target="_blank"
            >
              Youtube
            </a>
            <a
              href="https://instagram.com/cocaproductionfilm?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100083285113494"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default Contact;
