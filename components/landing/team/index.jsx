import "./style.css";

const TeamLand = () => {
  return (
    <section className="team">
      <h1 id="echipa-title" className="big-title">
        Echipa
      </h1>

      <div id="team" className="team-container">
        <div className="team-text-container">
          <div className="text-container-team">
            <h2>Coca</h2>
            <p>
              Urmaresc viata prin obiectivul camerei din copilarie. Caram cu
              greutate o camera de televiziune prin 2000, fara sa am puterea sa
              o urc pe umar. Urmaream prin vizor lumea desfasurata in fata mea,
              dar cu o siguranta ciudata.{" "}
            </p>
            <p>
              Eram acolo dar departe, protejat, in spatele camerei. Toate
              butoanele imi erau straine, greutatea nu putea fi suportata pe
              umar, dar sentimentul acela hipnotic de siguranta ma facea sa nu
              ma opresc. Ani au trecut, camerele au devenit mai mici, si am
              inceput sa ma pot plimba prin spatiu. Lumea se desfasoara in jurul
              nostru cu o forta incredibila, dar, obiectivul camerei privit prin
              vizor ma facea puternic.{" "}
            </p>
            <p>
              {" "}
              Acum fac asta cu aceeasi mirare fata de siguranta data de vizor,
              iar greutatea de pe umeri a camerei grele cu caseta, a trecut mai
              jos, in stomac, in fiecare clipa cand butonul de REC este apasat.
            </p>
          </div>
        </div>
        <div className="img-container">
          <img width={300} height={300} src="./coca_photo.webp" alt="" />
          <div className="blur"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamLand;
