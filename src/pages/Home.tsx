import { Link } from 'react-router-dom';
import { FaCoffee, FaFire, FaUserTie, FaLeaf } from 'react-icons/fa';

export default function Home() {
    const featuredItems = [
        {
            name: 'Espresso Klasik',
            desc: 'Shot espresso pekat dari biji Arabica Gayo pilihan',
            price: 'Rp 25.000',
            badge: 'Best Seller',
            image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80',
        },
        {
            name: 'Caramel Latte',
            desc: 'Perpaduan espresso, susu segar, dan caramel homemade',
            price: 'Rp 38.000',
            badge: 'Favorit',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
        },
        {
            name: 'Cold Brew',
            desc: 'Diseduh dingin selama 18 jam untuk rasa yang smooth',
            price: 'Rp 35.000',
            badge: 'Signature',
            image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80',
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="hero" id="hero">
                <div className="hero-bg">
                    <img src="/hero.gif" alt="Kopikoe coffee experience" />
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Featured Menu */}
            <section className="featured-section">
                <div className="container">
                    <div className="featured-header">
                        <span className="section-label">Menu Pilihan</span>
                        <h2 className="section-title">Kopi Favorit Kami</h2>
                        <p className="section-desc">
                            Dibuat dengan biji kopi terbaik dari berbagai penjuru Nusantara,
                            setiap cangkir menceritakan kisah tersendiri.
                        </p>
                    </div>
                    <div className="menu-grid">
                        {featuredItems.map((item, i) => (
                            <div className="menu-card animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }} key={i}>
                                <div className="menu-card-image">
                                    <img src={item.image} alt={item.name} loading="lazy" />
                                    <span className="menu-card-badge">{item.badge}</span>
                                </div>
                                <div className="menu-card-body">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <div className="menu-card-footer">
                                        <span className="menu-card-price">{item.price}</span>
                                        <button className="menu-card-order" aria-label="Pesan">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/menu" className="btn-secondary">Lihat Semua Menu →</Link>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img
                                src="https://loremflickr.com/600/600/coffee,shop?lock=100"
                                alt="Kopikoe coffee shop interior"
                                loading="lazy"
                            />
                        </div>
                        <div className="about-content">
                            <span className="section-label">Tentang Kami</span>
                            <h2 className="section-title">Cerita di Balik Setiap Cangkir</h2>
                            <p>
                                Kopikoe lahir dari kecintaan akan kopi Indonesia. Kami percaya
                                bahwa setiap biji kopi memiliki cerita — dari lereng gunung tempat
                                ia tumbuh hingga cangkir yang Anda nikmati.
                            </p>
                            <p>
                                Dengan barista berpengalaman dan biji kopi single-origin pilihan,
                                kami berkomitmen menghadirkan pengalaman kopi terbaik untuk Anda.
                            </p>
                            <div className="about-features">
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaCoffee /></div>
                                    <div>
                                        <h4>Single Origin</h4>
                                        <p>Biji kopi langsung dari petani</p>
                                    </div>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaFire /></div>
                                    <div>
                                        <h4>Fresh Roasted</h4>
                                        <p>Disangrai segar setiap hari</p>
                                    </div>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaUserTie /></div>
                                    <div>
                                        <h4>Expert Barista</h4>
                                        <p>Barista bersertifikat SCA</p>
                                    </div>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaLeaf /></div>
                                    <div>
                                        <h4>Sustainable</h4>
                                        <p>Mendukung petani lokal</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '32px' }}>
                                <Link to="/about" className="btn-primary">Pelajari Lebih →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
