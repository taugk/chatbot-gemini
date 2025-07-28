# 🤖 Chatbot Gemini

Chatbot Gemini adalah aplikasi web sederhana berbasis Node.js dan Express.js yang mengintegrasikan antarmuka chatbot. Proyek ini dirancang sebagai titik awal untuk membuat chatbot AI yang dapat dikembangkan lebih lanjut menggunakan layanan seperti Google Gemini API atau OpenAI.

## 🚀 Fitur

- Render halaman utama dengan antarmuka chatbot
- Routing sederhana menggunakan Express Router
- Struktur proyek modular
- Mudah untuk dikembangkan dan di-deploy

## 🧰 Teknologi yang Digunakan

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/) - Templating engine
- [Bootstrap](https://getbootstrap.com/) - Frontend styling
- [Git](https://git-scm.com/) - Versi kontrol

## 📁 Struktur Direktori

chatbot-gemini/
├── public/ # File statis (CSS, JS, gambar)
├── routes/
│ └── index.js # Routing utama
├── views/
│ ├── index.ejs # Tampilan utama chatbot
│ └── layout.ejs # Template layout (opsional)
├── app.js # Entry point aplikasi
├── package.json # Konfigurasi npm
└── README.md # Dokumentasi proyek


## ⚙️ Instalasi

1. **Clone repositori ini**
   ```bash
   git clone https://github.com/taugk/chatbot-gemini.git
   cd chatbot-gemini
2. **Install dependensi**
   ```bash
   npm install
4. Buat .env
   ```bash
   GEMINI_API_KEY=AIzaSyB63GL8xq8RCTUAm7kOaNI6YR_fOil-3C4
6. **Jalankan Aplikasi**
   ```bash
   node app.js
7. Akses di local server
   
Made with ❤️ by Taufik Nurul Hidayat
