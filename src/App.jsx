import React from 'react';
import './index.css';

// Dica: Coloque uma imagem do Shadow em /public/shadow-mascote.png
// Ícones podem ser importados de bibliotecas como 'lucide-react' ou 'react-icons'

function App() {
  return (
    <div className="app-container">

      {/* HEADER / HERO SECTION */}
      {/* === HEADER / HERO SECTION MODIFICADO === */}
      <header className="hero-section">

        {/* Lado Esquerdo: Texto e Botão */}
        <div className="hero-content">
          <h1>JOPE <span className="text-yellow">INFO</span></h1>
          <p className="hero-subtitle">
            Venha conhecer a escola JOPE de informática.
            A mais completa de Rio Largo!
          </p>

          <a
            href="https://wa.me/5582999331536"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cta-button">FALE NO WHATSAPP</button>
          </a>
        </div>

        {/* Lado Direito: Mascote */}
        <div className="hero-image-container">
          {/* Certifique-se de que image_1.png está na pasta /public */}
          <img
            src="/image_1.png"
            alt="Shadow the Hedgehog Mascote JOPE"
            className="mascote-image"
          />
        </div>

      </header>
      {/* ======================================== */}

      {/* SEÇÃO DE SERVIÇOS (GRID) */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>NOSSOS <span className="text-yellow">SERVIÇOS</span></h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Tecnologia, Diversão e Lanche no mesmo lugar.</p>
        </div>

        <div className="services-grid">

          {/* Card 1: Escola */}
          <div className="service-card">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎓</div>
            <h3>Escola JOPE</h3>
            <p>A mais completa de Rio Largo.</p>
            <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
              <li>Curso de Informática</li>
              <li>Windows 10</li>
              <li>Apostilas de estudo</li>
            </ul>
          </div>

          {/* Card 2: Games */}
          <div className="service-card">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎮</div>
            <h3>JOPE Game</h3>
            <p>O paraíso dos jogadores.</p>
            <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
              <li>PCs Gamers e Consoles</li>
              <li>Desbloqueio de PS3</li>
              <li>Desbloqueio de Xbox 360</li>
            </ul>
          </div>

          {/* Card 3: Serviços Rápidos */}
          <div className="service-card">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⚡</div>
            <h3>Conveniência</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Impressões</span>
                <span className="price-tag">R$ 1,00</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Vendas eletrônicas</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>FLAU (O melhor!)</span>
                <span className="price-tag">R$ 2,50</span>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* HORÁRIOS E RODAPÉ */}
      <footer style={{ backgroundColor: '#000', padding: '40px 20px', marginTop: '40px', textAlign: 'center' }}>
        <h3 className="text-yellow">Horário de Funcionamento</h3>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '30px' }}>
          <div>
            <strong>Segunda a Sexta</strong><br />
            13:30 às 21:30
          </div>
          <div>
            <strong>Sáb, Dom e Feriado</strong><br />
            09:00 às 21:00
          </div>
        </div>

        <div style={{ borderTop: '1px solid #333', paddingTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>

          {/* Link Telefone / WhatsApp */}
          <a
            href="https://wa.me/5582999331536"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <span className="text-yellow" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              📞 (82) 9 9933-1536
            </span>
          </a>

          {/* Link Instagram (Corrigido para @jope.in) */}
          <a
            href="https://www.instagram.com/jope.in"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            📸 @jope.in
          </a>

          <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>Rio Largo - AL</p>

          <p style={{ fontSize: '0.7rem', color: '#444', marginTop: '20px' }}>
            Desenvolvido por <a
              href="https://carlosandemberg.com.br"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#777', textDecoration: 'none', fontWeight: 'bold' }}
              onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
              onMouseOut={(e) => e.target.style.color = '#777'}
            >
              Carlos Andemberg
            </a>
          </p>

        </div>
      </footer>
    </div>
  );
}

export default App;