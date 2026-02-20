import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Hubungi Kami</span>
                    <h1>Kontak</h1>
                    <p>Ada pertanyaan atau ingin reservasi? Jangan ragu untuk menghubungi kami</p>
                </div>
            </section>

            <section className="contact-page-section" style={{ paddingTop: '60px' }}>
                <div className="container">
                    <div className="contact-grid">
                        <div>
                            <div className="contact-info-card">
                                <div className="contact-icon"><FaMapMarkerAlt /></div>
                                <div>
                                    <h4>Alamat</h4>
                                    <p>Jl. Kopi Nusantara No. 12<br />Jakarta Selatan, 12345</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon"><FaPhoneAlt /></div>
                                <div>
                                    <h4>Telepon</h4>
                                    <p>+62 812 3456 7890<br />+62 21 1234 5678</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon"><FaEnvelope /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>halo@kopikoe.id<br />reservasi@kopikoe.id</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon"><FaClock /></div>
                                <div>
                                    <h4>Jam Operasional</h4>
                                    <p>
                                        Senin - Jumat: 07:00 - 22:00<br />
                                        Sabtu - Minggu: 08:00 - 23:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h3>Kirim Pesan</h3>
                            {submitted ? (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        padding: '40px 20px',
                                        color: 'var(--color-gold)',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}><FaCheckCircle /></div>
                                    <p style={{ color: 'var(--color-cream)' }}>
                                        Terima kasih! Pesan Anda telah terkirim.
                                    </p>
                                    <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>
                                        Kami akan segera menghubungi Anda.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Nama</label>
                                            <input id="name" type="text" placeholder="Nama lengkap Anda" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input id="email" type="email" placeholder="email@contoh.com" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subjek</label>
                                        <input id="subject" type="text" placeholder="Reservasi / Pertanyaan / Lainnya" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Pesan</label>
                                        <textarea id="message" placeholder="Tulis pesan Anda di sini…" required></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                        Kirim Pesan →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
