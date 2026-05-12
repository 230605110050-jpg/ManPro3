# ProjeKita - Project Management Web Application

ProjeKita adalah aplikasi manajemen proyek berbasis web yang dibangun dengan React, Vite, dan Tailwind CSS. Aplikasi ini menyediakan fitur lengkap untuk mengelola proyek, tugas, jadwal, risiko, dan tim dalam satu platform terpadu.

## Fitur Utama

### 1. Dashboard
- Ringkasan proyek secara real-time
- Statistik tugas aktif, progres rata-rata, dan risiko terbuka
- Aktivitas terbaru tim
- Deadline mendatang
- Distribusi status tugas (grafik pie)

### 2. Manajemen Proyek (`/projects`)
- Daftar semua proyek dengan status dan progres
- Filter berdasarkan status (Aktif, On Hold, Completed)
- Detail proyek dengan informasi tim dan milestone

### 3. Manajemen Tugas (`/tasks`)
- Tampilan Kanban dan List
- Filter berdasarkan status dan prioritas
- Detail tugas dengan komentar tim
- Penugasan anggota tim

### 4. Jadwal (`/schedule`)
- Kalender menampilkan deadline tugas
- Visualisasi timeline proyek

### 5. Progres (`/progress`)
- Grafik progres mingguan untuk setiap proyek
- Perbandingan antar proyek

### 6. Manajemen Risiko (`/risks`)
- Identifikasi dan pelacakan risiko proyek
- Level risiko (Critical, High, Medium, Low)
- Strategi mitigasi

### 7. Tim (`/team`)
- Daftar anggota tim
- Status online/offline
- Tugas aktif dan tingkat penyelesaian

### 8. Laporan (`/reports`)
- Laporan progres proyek
- Ekspor data

### 9. Notifikasi (`/notifications`)
- Pengingat deadline
- Update status tugas
- Notifikasi risiko

### 10. Pengaturan (`/settings`)
- Pengaturan akun
- Preferensi tampilan

## Teknologi yang Digunakan

- **Frontend Framework:** React 18
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **Routing:** React Router DOM 7
- **UI Components:** Radix UI
- **Animasi:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **Toast Notifications:** Sonner
- **Form Handling:** React Hook Form + Zod
- **Date Handling:** date-fns
- **Theme:** next-themes

## Struktur Proyek

```
web/
├── src/
│   ├── components/          # Komponen UI
│   │   └── ui/           # Komponen Radix UI
│   ├── contexts/          # React Context (Auth)
│   ├── data/             # Data dummy
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilities
│   ├── pages/           # Halaman aplikasi
│   ├── App.jsx          # Komponen utama
│   ├── main.jsx         # Entry point
│   └── index.css        # Styling global
├── index.html
├── package.json
├── vite.config.js       # Konfigurasi Vite
├── tailwind.config.js  # Konfigurasi Tailwind
└── postcss.config.js  # Konfigurasi PostCSS
```

## Cara Menjalankan Aplikasi

### Prasyarat

 Pastikan Anda telah menginstal:
- **Node.js** (versi 18 atau lebih tinggi)
- **npm** (biasanya sudah tersedia dengan Node.js)

### Langkah 1: Clone Repository

```bash
git clone <repository-url>
cd <nama-folder-repo>
```

### Langkah 2: Install Dependencies

```bash
cd web
npm install
```

### Langkah 3: Menjalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`. Buka browser dan akses URL tersebut.

### Langkah 4: Build untuk Produksi (Optional)

Jika Anda ingin build untuk production:

```bash
npm run build
```

File hasil build akan berada di folder `dist/`.

### Langkah 5: Preview Production Build

```bash
npm run start
```

## Cara Login

Aplikasi ini menggunakan sistem autentikasi sederhana untuk demo. Anda dapat login dengan:
- **Email:** Ganti dengan email apapun (contoh: `admin@projekita.com`)
- **Password:** Ganti dengan password apapun
- **Role:** Pilih salah satu:
  - Admin
  - Project Manager
  - Anggota Tim

## Informasi Tambahan

### Link Alias
Aplikasi ini menggunakan `@/` sebagai alias untuk folder `src/`. Contoh:
- `import App from '@/App.jsx'` ≡ `import App from '@/src/App.jsx'`

### Data Dummy
Aplikasi ini menggunakan data dummy yang terletak di `src/data/dummyData.js`. Untuk menghubungkan dengan database nyata, Anda perlu:
1. Mengganti import datadummy dengan API calls
2. Mengimplementasikan backend server (Node.js, Python, dll)
3. Mengkonfigurasi database (PostgreSQL, MongoDB, dll)

### Kustomisasi

#### Mengganti Logo dan Nama Aplikasi
- Buka `src/pages/LoginPage.jsx` untuk mengganti nama "ManPro3"
- Ganti favicon di `index.html`

#### Mengganti Warna Tema
Edit bagian `:root` di `src/index.css`:
```css
:root {
  --primary: 221 75% 33%;    /* Warna utama */
  --accent: 160 84% 39%;    /* Warna aksen/success */
  --destructive: 0 84% 60%; /* Warna error */
  --warning: 38 92% 50%;     /* Warna warning */
  /* ... */
}
```

## Troubleshooting

### Error: "Rollup failed to resolve import"
Pastikan `vite.config.js` ada di folder `web/`. Jika tidak ada, buat file tersebut dengan konten:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Error: "Module not found"
Jalankan `npm install` kembali untuk memastikan semua dependencies terinstal dengan benar.

### Port Sudah Dipakai
Jika port 3000 sudah digunakan, Anda bisa menjalankan di port lain:
```bash
npm run dev -- --port 3001
```

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran.

---

Dibuat dengan ❤️ menggunakan React dan Tailwind CSS
