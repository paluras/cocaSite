import React, { useState } from "react";
import "./style.css";

const Blog = () => {
  return (
    <>
      <main className="blog">
        <h1>Articole</h1>

        {/* Map through the blogData array and create a blog post for each item */}

        <div className="blog-container">
          <article className="blog-text">
            <p>
              <time dateTime="2024/03/24">24/03/2024</time>
            </p>
            <img className="blog-img" src={`./coca_photo.png`} alt="" />
            <h2>Garajul 24</h2>
            <p>
              {" "}
              <b> Radu </b> restaureaza scutere Vespa oficial din 2014 dar face
              asta de cand se stie. Isi petrece tot timpul liber la el in
              atelier, ascultand muzica clasica si reparand motoare care pentru
              multi arata ca un puzzle de 10000 piese. Aseaza cu grija fiecare
              surub, urmareste fiecare urma de uzura iar la final, arata mai
              bine ca cele iesite din fabrica.
            </p>
            <p>
              Stie ca motoarele sunt lenese, ca nu poti face inconjurul lumii cu
              ele dar au un farmec aparte. Au personalitate aparte zice el si
              asa este. Cand intri in garajul lui, pare ca esti intr-un showroom
              de prima clasa. Vezi culori, reflexii, si forme inedite.
            </p>

            <p>Asta e Radu. Creeaza niste bijuterii pe 2 roti.</p>
            <span className="line"></span>
          </article>

          <article className="blog-text">
            <p>
              <time dateTime="2024/03/24">24/03/2024</time>
            </p>
            <img className="blog-img" src={`./croitor.png`} alt="" />
            <h2>Croitor</h2>
            <p>
              {" "}
              Doamna Maria e croitor. Face rochii de mireasa, haine pe comanda,
              corecteaza si modifica. La inceput facea haine de dansatoare dar
              acum nu se mai cer. Povesteste de parcursul greu din timpul
              formarii. Nu a ajuns din prima acolo unde isi dorea. A facut haine
              barbatesti. Dar a gasit o solutie ca spre final, sa se transfere
              la haine de dansatoare. Si de atunci asa a fost. A imbracat multi
              oameni. Ne arata cu mandrie o rochie de mireasa proaspat aranjata.{" "}
            </p>
            <p>
              Nu ii este teama sa taie materialul marcat proaspat de ea. Stie ca
              ce face, face bine. Iar mai apoi, taieturile se ascund ca si cum,
              n-au fost niciodata acolo.{" "}
            </p>
            <p>
              {" "}
              Doamna Maria e croitor. Face rochii de mireasa, haine pe comanda,
              corecteaza si modifica. La inceput facea haine de dansatoare dar
              acum nu se mai cer. Povesteste de parcursul greu din timpul
              formarii. Nu a ajuns din prima acolo unde isi dorea. A facut haine
              barbatesti. Dar a gasit o solutie ca spre final, sa se transfere
              la haine de dansatoare. Si de atunci asa a fost. A imbracat multi
              oameni. Ne arata cu mandrie o rochie de mireasa proaspat aranjata.{" "}
            </p>
            <p>
              Nu ii este teama sa taie materialul marcat proaspat de ea. Stie ca
              ce face, face bine. Iar mai apoi, taieturile se ascund ca si cum,
              n-au fost niciodata acolo.{" "}
            </p>

            <span className="line"></span>
          </article>

          <article className="blog-text">
            <p>
              <time dateTime="2024/03/24">24/03/2024</time>
            </p>
            <img className="blog-img" src={`./coca_photo.png`} alt="" />
            <h2>Reparatii</h2>

            <p>
              Domnu Ilie face meseria de la 14 ani. A trecut prin multe
              perioade, lumea s-a schimbat in multe moduri in jurul lui, dar el
              a ramas la fel. Facea treaba precis si cu multa pasiune. A invatat
              in scoli, de la mesteri, de la timpuri dar niciodata nu a dat
              inapoi. A invatat si pe altii. Acum priveste lumea cu usoara
              melancolie. Meseria lui se pierde incet, zice el, si credem asta.
              E o meserie dura, grea, si care cere multa rabdare si devotament.
            </p>

            <p>Asta e Radu. Creeaza niste bijuterii pe 2 roti.</p>
            <span className="line"></span>
          </article>
          <article className="blog-text">
            <p>
              <time dateTime="2024/03/24">24/03/2024</time>
            </p>
            <img className="blog-img" src={`./coca_photo.png`} alt="" />
            <h2>Reparatii</h2>

            <p>
              Domnu Ilie face meseria de la 14 ani. A trecut prin multe
              perioade, lumea s-a schimbat in multe moduri in jurul lui, dar el
              a ramas la fel. Facea treaba precis si cu multa pasiune. A invatat
              in scoli, de la mesteri, de la timpuri dar niciodata nu a dat
              inapoi. A invatat si pe altii. Acum priveste lumea cu usoara
              melancolie. Meseria lui se pierde incet, zice el, si credem asta.
              E o meserie dura, grea, si care cere multa rabdare si devotament.
            </p>

            <p>Asta e Radu. Creeaza niste bijuterii pe 2 roti.</p>
            <span className="line"></span>
          </article>
        </div>
      </main>
    </>
  );
};

export default Blog;
