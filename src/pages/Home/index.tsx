const Home = () => {
  return (
    <div>
      <div className="menu">
        <img alt="logo" />
        <img alt="home" />
        <img alt="settings" />
        <img alt="logout" />
      </div>
      <div className="home-content">
        <header>
          <div>
            <h1>Burguer Fresh</h1>
            <p>{new Date(Date.now()).toLocaleString()}</p>
          </div>
          <div>
            <img alt="search-icon" />
            <input />
          </div>
        </header>
        <section>
          <div>
            <p>Lanches</p> {/* Dado mockado */}
          </div>
          <div>
            <h2>Escolha seu lanche</h2>
            <select>
              <option value="1">1</option>
            </select>
          </div>
          <div className="list">
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
            <div>Card</div> {/* Dado mockado */}
          </div>
        </section>
      </div>
      <aside></aside>
    </div>
  );
};

export default Home;
