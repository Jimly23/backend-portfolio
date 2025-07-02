const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');
const Content = require('./models/Content');
const Experience = require('./models/Experience');

async function seedData() {
  await mongoose.connect(process.env.MONGO_URI);

  // Kosongkan koleksi
  await Project.deleteMany();
  await Content.deleteMany();
  await Experience.deleteMany();

  // Tambahkan konten
  await Content.insertMany([
    {
      section: 'home',
      text: 'Selamat datang di website portofolio saya. Saya adalah pengembang web yang berdedikasi dan suka belajar hal baru.'
    },
    {
      section: 'about',
      text: 'Saya adalah lulusan Teknik Informatika yang memiliki minat di bidang pengembangan web dan teknologi blockchain.'
    }
  ]);

  // Tambahkan project
  await Project.insertMany([
    { title: 'Website Toko Online', description: 'Sebuah platform e-commerce untuk UMKM.' },
    { title: 'Aplikasi Kasir', description: 'Aplikasi POS berbasis web untuk toko retail.' }
  ]);

  // Tambahkan pengalaman kerja
  await Experience.insertMany([
    { role: 'Frontend Developer', description: 'Mengembangkan antarmuka pengguna dengan React.js.', year: 2022 },
    { role: 'Backend Developer', description: 'Membangun REST API menggunakan Node.js dan MongoDB.', year: 2023 }
  ]);

  console.log('Seeder selesai ✅');
  process.exit();
}

seedData();
