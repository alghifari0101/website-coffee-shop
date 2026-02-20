import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="navbar-logo">
                            Kopi<span>koe</span>
                        </Link>
                        <p>
                            Menyajikan kopi berkualitas premium dari biji pilihan terbaik Indonesia.
                            Setiap cangkir adalah sebuah karya seni.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="TikTok"><FaTiktok /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Navigasi</h4>
                        <ul>
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about">Tentang</Link></li>
                            <li><Link to="/contact">Kontak</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Jam Buka</h4>
                        <ul>
                            <li><a href="#">Senin - Jumat</a></li>
                            <li><a href="#">07:00 - 22:00</a></li>
                            <li><a href="#">Sabtu - Minggu</a></li>
                            <li><a href="#">08:00 - 23:00</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Kontak</h4>
                        <ul>
                            <li><a href="#">Jl. Kopi Nusantara No. 12</a></li>
                            <li><a href="#">Jakarta Selatan</a></li>
                            <li><a href="tel:+6281234567890">+62 812 3456 7890</a></li>
                            <li><a href="mailto:halo@kopikoe.id">halo@kopikoe.id</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Kopikoe. All rights reserved.</p>
                    <p>Crafted with love</p>
                </div>
            </div>
        </footer>
    );
}
