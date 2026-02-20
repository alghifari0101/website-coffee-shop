import { useState } from 'react';

type Category = 'Semua' | 'Espresso' | 'Latte' | 'Cold Brew' | 'Non-Coffee' | 'Snack';

interface MenuItem {
    name: string;
    desc: string;
    price: number;
    category: Category;
    badge?: string;
    image: string;
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

const menuItems: MenuItem[] = [
    {
        name: 'Espresso Klasik',
        desc: 'Shot espresso pekat dari biji Arabica Gayo pilihan',
        price: 25000,
        category: 'Espresso',
        badge: 'Best Seller',
        image: 'https://loremflickr.com/400/300/espresso?lock=1',
    },
    {
        name: 'Double Shot',
        desc: 'Dua shot espresso untuk yang butuh energi ekstra',
        price: 30000,
        category: 'Espresso',
        image: 'https://loremflickr.com/400/300/espresso,dark?lock=2',
    },
    {
        name: 'Americano',
        desc: 'Espresso dengan air panas, clean dan bold',
        price: 28000,
        category: 'Espresso',
        image: 'https://loremflickr.com/400/300/coffee,americano?lock=3',
    },
    {
        name: 'Caramel Latte',
        desc: 'Perpaduan espresso, susu segar, dan caramel homemade',
        price: 38000,
        category: 'Latte',
        badge: 'Favorit',
        image: 'https://loremflickr.com/400/300/latte?lock=4',
    },
    {
        name: 'Vanilla Latte',
        desc: 'Latte klasik dengan sentuhan vanilla Madagascar',
        price: 36000,
        category: 'Latte',
        image: 'https://loremflickr.com/400/300/coffee,vanilla?lock=5',
    },
    {
        name: 'Matcha Latte',
        desc: 'Matcha Uji premium dengan susu oat creamy',
        price: 40000,
        category: 'Non-Coffee',
        badge: 'New',
        image: 'https://loremflickr.com/400/300/matcha?lock=6',
    },
    {
        name: 'Cold Brew Original',
        desc: 'Diseduh dingin selama 18 jam untuk rasa yang smooth',
        price: 35000,
        category: 'Cold Brew',
        badge: 'Signature',
        image: 'https://loremflickr.com/400/300/coldbrew?lock=7',
    },
    {
        name: 'Cold Brew Tonic',
        desc: 'Cold brew dengan tonic water dan lemon segar',
        price: 40000,
        category: 'Cold Brew',
        image: 'https://loremflickr.com/400/300/coffee,ice?lock=8',
    },
    {
        name: 'Chocolate Latte',
        desc: 'Belgian chocolate dengan espresso dan susu segar',
        price: 38000,
        category: 'Non-Coffee',
        image: 'https://loremflickr.com/400/300/hotchocolate?lock=9',
    },
    {
        name: 'Croissant Butter',
        desc: 'Croissant renyah berlapis mentega Prancis premium',
        price: 28000,
        category: 'Snack',
        image: 'https://loremflickr.com/400/300/croissant?lock=10',
    },
    {
        name: 'Banana Bread',
        desc: 'Roti pisang homemade dengan walnut dan cinnamon',
        price: 25000,
        category: 'Snack',
        image: 'https://loremflickr.com/400/300/cake?lock=11',
    },
    {
        name: 'Affogato',
        desc: 'Gelato vanilla disiram espresso panas, sweet meets bold',
        price: 42000,
        category: 'Espresso',
        badge: 'Premium',
        image: 'https://loremflickr.com/400/300/affogato?lock=12',
    },
];

const categories: Category[] = ['Semua', 'Espresso', 'Latte', 'Cold Brew', 'Non-Coffee', 'Snack'];

export default function Menu() {
    const [active, setActive] = useState<Category>('Semua');

    const filtered = active === 'Semua'
        ? menuItems
        : menuItems.filter(item => item.category === active);

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Kopikoe</span>
                    <h1>Menu Kami</h1>
                    <p>Jelajahi beragam pilihan kopi dan hidangan pendamping favorit Anda</p>
                </div>
            </section>

            <section className="menu-page-section" style={{ paddingTop: '60px' }}>
                <div className="container">
                    <div className="menu-categories">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`menu-cat-btn ${active === cat ? 'active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="menu-grid">
                        {filtered.map((item, i) => (
                            <div
                                className="menu-card animate-fade-in-up"
                                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                                key={`${active}-${i}`}
                            >
                                <div className="menu-card-image">
                                    <img src={item.image} alt={item.name} loading="lazy" />
                                    {item.badge && <span className="menu-card-badge">{item.badge}</span>}
                                </div>
                                <div className="menu-card-body">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <div className="menu-card-footer">
                                        <span className="menu-card-price">{formatCurrency(item.price)}</span>
                                        <button className="menu-card-order" aria-label="Pesan">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
