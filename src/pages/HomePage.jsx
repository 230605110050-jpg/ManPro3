import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import { 
  ArrowRight, LayoutDashboard, CheckSquare, CalendarDays, 
  Users, AlertTriangle, TrendingUp, Star, CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LandingHeader from '@/components/LandingHeader.jsx';
import LandingFooter from '@/components/LandingFooter.jsx';

// Counter Component
const AnimatedCounter = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(from + (to - from) * easeOut);
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <span>{count}{suffix}</span>;
};

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Realtime",
      description: "Pantau seluruh aktivitas proyek dalam satu tampilan komprehensif yang diperbarui secara instan."
    },
    {
      icon: CheckSquare,
      title: "Manajemen Tugas",
      description: "Delegasikan, lacak, dan selesaikan tugas dengan sistem kanban yang intuitif dan mudah digunakan."
    },
    {
      icon: CalendarDays,
      title: "Timeline & Gantt",
      description: "Visualisasikan jadwal proyek Anda dengan Gantt chart interaktif untuk memastikan tenggat waktu terpenuhi."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Fasilitasi komunikasi tim dengan komentar real-time, notifikasi, dan berbagi file terpusat."
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Identifikasi, nilai, dan mitigasi risiko proyek sebelum menjadi masalah yang menghambat progres."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Hasilkan laporan otomatis dan lacak metrik kinerja utama untuk pengambilan keputusan berbasis data."
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CTO",
      company: "TechNusantara",
      image: "BS",
      quote: "ManPro3 telah mengubah cara tim engineering kami bekerja. Visibilitas proyek meningkat drastis dan pengiriman fitur menjadi 30% lebih cepat."
    },
    {
      name: "Siti Rahmawati",
      role: "Operations Director",
      company: "FinansialKu",
      image: "SR",
      quote: "Fitur manajemen risiko di platform ini sangat luar biasa. Kami dapat mengantisipasi masalah sebelum terjadi, menghemat waktu dan biaya yang signifikan."
    },
    {
      name: "Andi Wijaya",
      role: "Project Manager",
      company: "Manufaktur Indo",
      image: "AW",
      quote: "Transisi dari spreadsheet ke ManPro3 sangat mulus. Tim kami langsung terbiasa dengan antarmukanya yang bersih dan intuitif."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "Gratis",
      description: "Sempurna untuk tim kecil yang baru memulai.",
      features: ["Hingga 3 Proyek", "Maksimal 5 Anggota Tim", "Kanban Board Dasar", "Penyimpanan 5GB", "Dukungan Komunitas"],
      buttonText: "Mulai Gratis",
      popular: false
    },
    {
      name: "Professional",
      price: "Rp 299.000",
      period: "/bulan",
      description: "Ideal untuk tim berkembang yang butuh fitur lengkap.",
      features: ["Proyek Tidak Terbatas", "Hingga 20 Anggota Tim", "Gantt Chart & Timeline", "Manajemen Risiko", "Penyimpanan 50GB", "Dukungan Prioritas"],
      buttonText: "Coba Gratis 14 Hari",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Solusi khusus untuk organisasi skala besar.",
      features: ["Semua Fitur Professional", "Anggota Tim Tidak Terbatas", "SSO & Keamanan Lanjutan", "Laporan Kustom", "Penyimpanan Tidak Terbatas", "Dedicated Account Manager"],
      buttonText: "Hubungi Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Apakah ManPro3 cocok untuk tim non-teknis?",
      answer: "Tentu saja. Kami merancang ManPro3 dengan antarmuka yang intuitif sehingga siapa pun, terlepas dari latar belakang teknis mereka, dapat langsung menggunakannya dengan mudah."
    },
    {
      question: "Bagaimana keamanan data di ManPro3?",
      answer: "Keamanan adalah prioritas utama kami. Data Anda dienkripsi baik saat transit maupun saat istirahat menggunakan standar industri (AES-256). Kami juga melakukan audit keamanan rutin."
    },
    {
      question: "Bisakah saya mengimpor data dari alat manajemen proyek lain?",
      answer: "Ya, kami menyediakan alat impor bawaan untuk memindahkan data Anda dari platform populer seperti Trello, Asana, dan Jira hanya dengan beberapa klik."
    },
    {
      question: "Apakah ada batasan jumlah tamu (guest) yang bisa diundang?",
      answer: "Pada paket Professional dan Enterprise, Anda dapat mengundang tamu (seperti klien atau vendor) tanpa batas untuk melihat progres proyek tanpa biaya tambahan."
    },
    {
      question: "Bagaimana sistem penagihan untuk paket berbayar?",
      answer: "Kami menawarkan penagihan bulanan dan tahunan. Jika Anda memilih penagihan tahunan, Anda akan mendapatkan diskon sebesar 20% dibandingkan harga bulanan."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>ManPro3 - Kelola Proyek Anda dengan Lebih Efisien</title>
        <meta name="description" content="Platform manajemen proyek modern untuk tim yang produktif." />
      </Helmet>

      <LandingHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
          
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  ManPro3 v2.0 Kini Tersedia
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance">
                  Kelola Proyek Anda dengan Lebih <span className="text-primary">Efisien</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-[60ch]">
                  Tinggalkan spreadsheet yang membingungkan. Satukan tim, tugas, dan tenggat waktu dalam satu platform modern yang dirancang untuk produktivitas maksimal.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-primary text-base h-12 px-8" onClick={() => navigate('/login')}>
                    Mulai Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base h-12 px-8" onClick={() => navigate('/login')}>
                    Lihat Demo
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:ml-auto"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                  <img 
                    src="https://images.unsplash.com/photo-1689871176648-1cf945ff631f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Tim profesional sedang berkolaborasi menggunakan platform manajemen proyek" 
                    className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-border bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 500, suffix: "+", label: "Pengguna Aktif" },
                { value: 1200, suffix: "+", label: "Proyek Terkelola" },
                { value: 98, suffix: "%", label: "Kepuasan Pengguna" },
                { value: 50, suffix: "+", label: "Perusahaan Percaya" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
                    <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Semua yang Anda Butuhkan</h2>
              <p className="text-lg text-muted-foreground">
                Fitur komprehensif yang dirancang khusus untuk menangani kompleksitas proyek modern tanpa mengorbankan kemudahan penggunaan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-muted/30 border-y border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dipercaya oleh Tim Hebat</h2>
              <p className="text-lg text-muted-foreground">
                Lihat bagaimana ManPro3 membantu perusahaan dari berbagai industri mencapai target mereka lebih cepat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card border-border/50">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <blockquote className="text-lg mb-8 flex-1 text-foreground/90">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                          {testimonial.image}
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Harga yang Transparan</h2>
              <p className="text-lg text-muted-foreground">
                Pilih paket yang sesuai dengan ukuran dan kebutuhan tim Anda. Tidak ada biaya tersembunyi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {pricing.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${tier.popular ? 'md:-mt-8 md:mb-8 z-10' : ''}`}
                >
                  <Card className={`h-full flex flex-col ${
                    tier.popular 
                      ? 'border-primary shadow-xl ring-2 ring-primary/20' 
                      : 'border-border/50'
                  }`}>
                    {tier.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                        Paling Populer
                      </div>
                    )}
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                        <p className="text-muted-foreground text-sm min-h-[40px]">{tier.description}</p>
                      </div>
                      <div className="mb-8">
                        <span className="text-4xl font-bold tabular-nums">{tier.price}</span>
                        {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full mt-auto ${tier.popular ? 'btn-primary' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                        onClick={() => navigate('/login')}
                      >
                        {tier.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-muted/30 border-t border-border">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan Umum</h2>
              <p className="text-lg text-muted-foreground">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang ManPro3.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full bg-card rounded-2xl border border-border/50 px-6 py-2 shadow-sm">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-0">
                    <AccordionTrigger className="text-left font-medium text-base hover:text-primary py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-95 -z-10" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay -z-10" />
          
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto text-primary-foreground"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Siap Meningkatkan Produktivitas Tim Anda?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 leading-relaxed">
                Bergabunglah dengan ratusan perusahaan yang telah mentransformasi cara mereka mengelola proyek. Mulai uji coba gratis Anda hari ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base h-14 px-8" onClick={() => navigate('/login')}>
                  Mulai Gratis Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base h-14 px-8" onClick={() => navigate('/login')}>
                  Hubungi Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default HomePage;