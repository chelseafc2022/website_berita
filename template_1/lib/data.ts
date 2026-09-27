export type Category = { name: string; slug: string; description: string; accent: string };
export type Article = {
  title: string; slug: string; excerpt: string; content: string; category: Category; author: string;
  publishedAt: string; views: number; image: string; imageCaption: string; isBreaking?: boolean;
};

export const categories: Category[] = [
  { name: "Politik", slug: "politik", description: "Arah kebijakan dan demokrasi Indonesia.", accent: "#F04D3A" },
  { name: "Ekonomi", slug: "ekonomi", description: "Cerita di balik angka dan keseharian ekonomi.", accent: "#D98C10" },
  { name: "Teknologi", slug: "teknologi", description: "Inovasi yang membentuk cara kita hidup.", accent: "#0B8F8C" },
  { name: "Daerah", slug: "daerah", description: "Kabar baik dari berbagai penjuru Nusantara.", accent: "#5E61C9" },
  { name: "Pendidikan", slug: "pendidikan", description: "Ruang belajar untuk masa depan yang setara.", accent: "#8C4FB4" },
  { name: "Olahraga", slug: "olahraga", description: "Semangat, strategi, dan prestasi olahraga.", accent: "#1C9B5E" },
];

const bySlug = (slug: string) => categories.find((category) => category.slug === slug) || categories[0];
const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

export const articles: Article[] = [
  {
    title: "Kota-kota pesisir mulai menata napas baru lewat transportasi hijau",
    slug: "kota-pesisir-transportasi-hijau", category: bySlug("daerah"), author: "Nadia Pramesti",
    publishedAt: "2026-09-09T06:30:00+07:00", views: 18420, isBreaking: true,
    excerpt: "Bus listrik dan jalur pejalan kaki menjadi denyut baru kota pesisir, menghubungkan mobilitas warga dengan udara yang lebih bersih.",
    image: "/images/hero-kota-hijau.png", imageCaption: "Transportasi publik menjadi simpul penting dalam kota yang lebih ramah lingkungan.",
    content: `<p>Pagi di kota pesisir itu kini dibuka oleh suara yang lebih pelan. Bus listrik melintas di antara deret pohon peneduh, membawa pekerja, pelajar, dan harapan bahwa perjalanan harian bisa terasa sedikit lebih ringan.</p><p>Dalam dua tahun terakhir, pemerintah kota bersama komunitas warga menata ulang koridor utama. Trotoar diperlebar, halte dibuat teduh, dan rute-rute pendek disambungkan dengan angkutan umum.</p><h2>Mobilitas yang memihak warga</h2><p>Perubahan ini bukan hanya soal mengganti kendaraan. Perencana kota menyebutnya sebagai cara baru memandang jalan: ruang bersama yang harus aman untuk berjalan, bersepeda, dan berjumpa.</p><blockquote>“Kota yang baik membuat pilihan ramah lingkungan menjadi pilihan yang paling mudah,” kata salah satu perencana transportasi.</blockquote><p>Warga mulai merasakan dampaknya. Waktu tunggu lebih pasti, biaya perjalanan lebih terukur, dan kualitas udara di koridor utama perlahan membaik.</p><ul><li>18 bus listrik telah beroperasi pada tiga koridor utama.</li><li>Jalur pejalan kaki baru menghubungkan sekolah, pasar, dan ruang publik.</li><li>Tarif terintegrasi mendorong perpindahan dari kendaraan pribadi.</li></ul><p>Langkah berikutnya adalah memastikan perubahan itu hadir hingga ke lingkungan-lingkungan kecil, tempat perjalanan sehari-hari benar-benar dimulai.</p>`
  },
  {
    title: "Petani muda mengubah panen lokal menjadi produk bernilai tambah",
    slug: "petani-muda-produk-bernilai-tambah", category: bySlug("ekonomi"), author: "Raka Mahendra",
    publishedAt: "2026-09-08T14:10:00+07:00", views: 12680,
    excerpt: "Dari kebun kecil hingga etalase digital, generasi baru petani membangun rantai nilai yang lebih dekat dengan konsumen.",
    image: photo("photo-1464226184884-fa280b87c399"), imageCaption: "Pertanian lokal beradaptasi dengan teknologi dan pasar baru.",
    content: `<p>Musim panen tak lagi berarti akhir pekerjaan. Bagi kelompok tani muda ini, panen adalah awal dari proses baru: mengolah, mengemas, dan menceritakan asal-usul produk kepada pembeli.</p><p>Lewat koperasi kecil, mereka berbagi peralatan dan mengatur pengiriman agar hasil kebun tetap segar sampai ke kota.</p><h2>Mendekatkan kebun dan meja makan</h2><p>Model ini memberi petani ruang untuk menentukan harga yang lebih adil. Konsumen pun dapat mengenali siapa yang menanam makanan mereka.</p>`
  },
  {
    title: "Sekolah di pulau kecil membuktikan kelas digital bisa terasa dekat",
    slug: "sekolah-pulau-kecil-kelas-digital", category: bySlug("pendidikan"), author: "Sinta Nuraini",
    publishedAt: "2026-09-08T10:30:00+07:00", views: 9320,
    excerpt: "Dengan koneksi sederhana dan perangkat bersama, guru mengajak murid menjelajah pengetahuan tanpa kehilangan akar lokal.",
    image: photo("photo-1509062522246-3755977927d7"), imageCaption: "Pembelajaran digital dirancang untuk mendukung peran guru di kelas.",
    content: `<p>Di sebuah kelas yang menghadap laut, layar proyektor kini berdampingan dengan buku tulis dan peta kertas. Teknologi hadir bukan untuk menggantikan guru, melainkan memperluas jangkauan mereka.</p><p>Materi pelajaran diunduh lebih dulu saat jaringan stabil, lalu dipelajari bersama secara luring di sekolah.</p><h2>Belajar dari tempat berpijak</h2><p>Guru juga mengajak murid mendokumentasikan cerita kampung mereka sendiri. Hasilnya menjadi bahan belajar yang terasa akrab dan membanggakan.</p>`
  },
  {
    title: "Startup lokal merancang aplikasi agar layanan publik lebih mudah dijangkau",
    slug: "startup-lokal-aplikasi-layanan-publik", category: bySlug("teknologi"), author: "Dimas Ardi",
    publishedAt: "2026-09-07T16:45:00+07:00", views: 8970,
    excerpt: "Desain yang sederhana dan bahasa yang akrab menjadi kunci agar teknologi benar-benar membantu lebih banyak orang.",
    image: photo("photo-1551434678-e076c223a692"), imageCaption: "Tim pengembang menguji layanan langsung bersama warga.",
    content: `<p>Alih-alih mengejar sebanyak mungkin fitur, tim kecil ini memulai dari satu pertanyaan: apa yang paling menyulitkan warga saat mengakses layanan publik?</p><p>Jawabannya kemudian diterjemahkan menjadi antarmuka yang ringkas, jelas, dan mudah digunakan dari layar ponsel apa pun.</p><h2>Teknologi yang membumi</h2><p>Pengujian dilakukan bersama pengguna dari beragam usia. Masukan mereka menjadi dasar setiap penyempurnaan produk.</p>`
  },
  {
    title: "Ruang terbuka baru menghidupkan kembali pertemuan warga di tengah kota",
    slug: "ruang-terbuka-pertemuan-warga", category: bySlug("daerah"), author: "Alya Fitria",
    publishedAt: "2026-09-07T09:15:00+07:00", views: 7230,
    excerpt: "Taman kecil yang dulu terabaikan kini menjadi ruang membaca, bermain, dan berdiskusi bagi lintas generasi.",
    image: photo("photo-1441974231531-c6227db76b6e"), imageCaption: "Ruang hijau publik memberi jeda di tengah kepadatan kota.",
    content: `<p>Setiap sore, taman itu berubah menjadi ruang bersama. Anak-anak bermain, lansia berjalan santai, dan beberapa warga membuka lapak buku kecil di dekat pohon.</p><p>Perubahan sederhana itu menghadirkan tempat baru untuk saling mengenal di lingkungan yang sebelumnya terasa terburu-buru.</p>`
  },
  {
    title: "Tim nasional muda tampil berani pada laga pembuka turnamen regional",
    slug: "timnas-muda-laga-pembuka-regional", category: bySlug("olahraga"), author: "Fajar Purnomo",
    publishedAt: "2026-09-06T21:00:00+07:00", views: 21650,
    excerpt: "Permainan kolektif dan keberanian menekan lawan menjadi catatan positif dari kemenangan pertama.",
    image: photo("photo-1579952363873-27f3bade9f55"), imageCaption: "Semangat muda mengiringi laga pembuka turnamen.",
    content: `<p>Gol pada babak kedua mengubah atmosfer stadion. Namun, pelatih menilai kerja keras tim sepanjang laga adalah modal yang paling penting untuk pertandingan berikutnya.</p><p>Para pemain muda tampil tenang saat menguasai bola dan berani mengambil keputusan di sepertiga akhir lapangan.</p>`
  }
];

export function formatDate(value: string, options: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", ...options }).format(new Date(value));
}

export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
