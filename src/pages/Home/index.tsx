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
      <aside>
        <header>
          <h2>Pedido 12</h2> {/* Dado mockado, número do pedido */}
          <div>
            <button>Comer no Local</button>
            <button>P/ Viagem</button>
            <button>Delivery</button>
          </div>
        </header>
        <div>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
            <h3>Preço</h3>
          </div>
          <div className="checkout-cards-container">
            <div>Card checkout</div> {/* Dado mockado */}
            <div>Card checkout</div> {/* Dado mockado */}
            <div>Card checkout</div> {/* Dado mockado */}
          </div>
        </div>
        <div>
          <div>
            <p>Desconto</p>
            <p>R$0.00</p>
          </div>
          <div>
            <p>Sub total</p>
            <p>R$0.00</p>
          </div>
          <button>Continuar para o pagamento</button>
        </div>
      </aside>
    </div>
  );
};

export default Home;
