# NusaKabar

Portal berita contoh berbasis Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL/Prisma, dan Auth.js.

## Menjalankan lokal

1. Salin `.env.example` menjadi `.env`, lalu isi `DATABASE_URL` dan `AUTH_SECRET`.
2. Instal dependensi: `npm install`.
3. Buat basis data dan Prisma Client: `npx prisma migrate dev --name init`.
4. Isi akun admin contoh: `npm run db:seed`.
5. Jalankan: `npm run dev`.

Akun seed memakai `redaksi@nusakabar.id`. Ubah kata sandi seed di `prisma/seed.ts` sebelum memakai aplikasi di lingkungan nyata.

## Struktur

- `app/`: halaman publik, dashboard, route REST, robots, dan sitemap.
- `components/`: komponen UI portal dan CMS yang bisa digunakan ulang.
- `lib/data.ts`: data presentasi sementara; ganti dengan query Prisma pada tahap integrasi berikutnya.
- `prisma/schema.prisma`: model User, Category, Article, dan Advertisement beserta indeks query utama.

Konten HTML artikel pada `lib/data.ts` hanyalah konten tepercaya untuk demo. Saat menyimpan dari rich-text editor, sanitasi HTML di server sebelum dipersistenkan dan sebelum dirender.
