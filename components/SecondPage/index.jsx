import { forwardRef } from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
const SecondPage = forwardRef(function SecondPage({ visible }, ref) {
  return (
    <section id="second" className="second-page">
      <div className="about-us">
        <div className={`hidden about-us-container one-section ${visible}`}>
          <h1 className="big-titles">Eliberează-ți creativitatea</h1>
          <p className="text-about">
            Si regăsește-ți identitatea în fiecare cadru. Fie ca esti un
            antreprenor care isi doreste sa se afirme in spatiul online, fie ca
            esti o persoana care are o idee minunata dar nu stie cum sa o puna
            in aplicare, noi putem pune asta in imagini.
          </p>
        </div>
        <div
          ref={ref}
          className={`hidden about-us-container two-section ${visible}`}
        >
          <h1 className="big-titles">
            Exploreaza și îmbrățișează autenticitatea ta în fiecare producție.
          </h1>
          <p className="text-about">
            Oferim un cadru care nu face altceva decat sa amplifice viziunea ta
            dar si modul tau unic si autentic de a exista in societate (dpdv
            profesional dar si personal).
          </p>
        </div>
        <div className={`hidden about-us-container three-section ${visible}`}>
          <h1 className="big-titles">
            Înțelege-ți esența artistică și regăsește-ți propriul stil
          </h1>
          <p className="text-about">
            Suntem alaturi la fiecare pas pentru a intelege si asuma stilul tau
            propriu. Cladim pe ce ai deja si punem in valoare toate calitatile.
          </p>
        </div>
      </div>
    </section>
  );
});

export default SecondPage;
