import { FaMountain, FaMicroscope, FaHandshake, FaRecycle } from 'react-icons/fa';
import { FaBullseye, FaHeart, FaHouse } from 'react-icons/fa6';

export default function About() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Cerita Kami</span>
                    <h1>Tentang Kopikoe</h1>
                    <p>Perjalanan kami dalam menghadirkan kopi terbaik Nusantara untuk Anda</p>
                </div>
            </section>

            <section className="about-page-section" style={{ paddingTop: '60px' }}>
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img
                                src="https://loremflickr.com/600/800/coffee,beans?lock=101"
                                alt="Proses roasting kopi"
                                loading="lazy"
                            />
                        </div>
                        <div className="about-content">
                            <span className="section-label">Sejak 2020</span>
                            <h2 className="section-title">Lahir dari Kecintaan akan Kopi Indonesia</h2>
                            <p>
                                Kopikoe didirikan oleh sekelompok pecinta kopi yang percaya bahwa
                                Indonesia memiliki biji kopi terbaik di dunia. Kami memulai
                                perjalanan ini dari garasi kecil, menyangrai biji kopi secara
                                manual dengan penuh dedikasi.
                            </p>
                            <p>
                                Kini, Kopikoe telah tumbuh menjadi tempat berkumpul untuk
                                para penikmat kopi sejati. Kami tetap berpegang pada prinsip awal:
                                kualitas tanpa kompromi, keberlanjutan, dan penghargaan terhadap
                                setiap petani kopi yang menjadi bagian dari perjalanan kami.
                            </p>
                            <div className="about-features">
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaMountain /></div>
                                    <div>
                                        <h4>Biji Pilihan</h4>
                                        <p>Langsung dari dataran tinggi Gayo, Toraja, dan Flores</p>
                                    </div>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaMicroscope /></div>
                                    <div>
                                        <h4>Quality Control</h4>
                                        <p>Setiap batch melalui proses cupping ketat</p>
                                    </div>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaHandshake /></div>
                                    <div>
                                        <h4>Direct Trade</h4>
                                        <p>Hubungan langsung dengan petani lokal</p>
                                    </div>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><FaRecycle /></div>
                                    <div>
                                        <h4>Eco-Friendly</h4>
                                        <p>Kemasan ramah lingkungan & zero waste goals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">Nilai Kami</span>
                        <h2 className="section-title">Apa yang Membuat Kami Berbeda</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-card-icon"><FaBullseye /></div>
                            <h3>Kualitas Premium</h3>
                            <p>
                                Hanya biji kopi specialty grade yang lolos seleksi ketat kami.
                                Kami tidak pernah berkompromi soal kualitas.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-card-icon"><FaHeart /></div>
                            <h3>Keberlanjutan</h3>
                            <p>
                                Kami berkomitmen pada praktik bisnis yang berkelanjutan, dari
                                sourcing hingga penyajian.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-card-icon"><FaHouse /></div>
                            <h3>Komunitas</h3>
                            <p>
                                Kopikoe bukan hanya kedai kopi, tapi ruang untuk berkumpul,
                                berkarya, dan berbagi cerita.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
