const Clients = () => {
  return (
    <>
      <div className="worked-with">
        Clienti
        <div className="worked-icons">
          <a href="https://www.facebook.com/fundatiatineret.tulcea/?locale=ro_RO">
            <img
              style={{
                height: "75px",
              }}
              src="./FJT.jpg"
              alt="FTJ Logo"
            />
          </a>

          <a href="https://www.eematico.org/">
            <img
              style={{
                height: "75px",
              }}
              src="./eematico_logo.png"
              alt="Logo of Eematico"
            />
          </a>
          <a href="https://edukiwi.ro/">
            <img
              style={{
                height: "75px",
                width: "120px",
              }}
              src="./logo-verde-new.svg"
              alt="Logo of edu Kiwi"
            />
          </a>
        </div>
       
      </div>
    </>
  );
};

export default Clients;
