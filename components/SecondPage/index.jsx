import { forwardRef } from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
const SecondPage = forwardRef(function SecondPage({ visible }, ref) {
  return (
    <section id="second" className="second-page">
      <div className="about-us">
        <div className={`hidden about-us-container one-section ${visible}`}>
          <h1 className="big-titles">Viziunea Noastră</h1>
          <p className="text-about">
            Transformăm povești în realitate vizuală memorabilă, de la idee la
            produsul final. Indiferent de provocare, de la imagini de înaltă
            calitate la strategii de marketing eficiente, ne asigurăm că fiecare
            cadru conectează și emoționează.
          </p>
        </div>
        <div
          ref={ref}
          className={`hidden about-us-container two-section ${visible}`}
        >
          <h1  className="big-titles">Expertiza Noastră</h1>
          <p className="text-about">
            Combinăm tehnologie de ultimă oră cu creativitate nelimitată pentru
            a produce videouri care povestesc, emoționează și motivează. Suntem
            dedicați să aducem la viață viziuni îndrăznețe, oferind strategii de
            marketing vizual personalizate.
          </p>
        </div>
        <div className={`hidden about-us-container three-section ${visible}`}>
          <h1 className="big-titles">Realizările Noastre</h1>
          <p className="text-about">
            Ne aventurăm cu pasiune în fiecare proiect, depășind constant
            limitele pentru a atinge excelența. Măsurăm succesul prin impactul
            creat și prin poveștile de succes realizate împreună cu clienții
            noștri, transformând viziuni în realități impresionante.
          </p>
        </div>
      </div>
    </section>
  );
});

export default SecondPage;
