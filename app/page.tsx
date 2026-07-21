'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, MessageCircle, Wrench, Snowflake, Wind, MapPin, CheckCircle, Clock, ShieldCheck, PhoneCall } from 'lucide-react';
import { useRef } from 'react';

const phoneNumber = "0561278331";
const waLink = "https://wa.me/971561278331";
const callLink = "tel:+971561278331";

const img1 = "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1784633706/WhatsApp_Image_2026-07-20_at_11.20.03_PM_hsztob.jpg";
const img2 = "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1784633706/WhatsApp_Image_2026-07-20_at_11.20.03_PM_1_qwbzpa.jpg";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="min-h-screen relative bg-white">
      {/* --- HERO SECTION --- */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={img1}
            alt="صيانة مكيفات"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              خدمة طوارئ 24/7
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              الرؤية الذهبية <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                للخدمات الفنية
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              خبراء صيانة، تركيب، وتنظيف المكيفات المركزية والمنفصلة (السبليت) بأعلى معايير الجودة.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={callLink}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <PhoneCall className="w-5 h-5" />
                اتصل بنا الآن
              </a>
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-md transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COVERAGE AREA --- */}
      <section className="py-10 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["دبي", "الشارقة", "عجمان"].map((city, i) => (
              <motion.div 
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-xl md:text-2xl font-semibold"
              >
                <MapPin className="text-blue-200" />
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">خدماتنا المتميزة</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Snowflake className="w-10 h-10 text-blue-500" />,
                title: "صيانة شاملة",
                desc: "إصلاح جميع أعطال المكيفات وتعبئة غاز الفريون لضمان تبريد مثالي طوال العام."
              },
              {
                icon: <Wind className="w-10 h-10 text-blue-500" />,
                title: "تنظيف وتعقيم",
                desc: "غسيل المكيفات بالضغط العالي وتنظيف الفلاتر لإزالة الأتربة والبكتيريا وتحسين جودة الهواء."
              },
              {
                icon: <Wrench className="w-10 h-10 text-blue-500" />,
                title: "فك وتركيب",
                desc: "تركيب المكيفات الجديدة والمستعملة وتأسيس تمديدات النحاس باحترافية عالية."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US & SECOND IMAGE --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                لماذا تختار <span className="text-blue-600">الرؤية الذهبية</span>؟
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                نحن ندرك أهمية التكييف في الأجواء الحارة، لذلك نوفر فريقاً من الفنيين المحترفين لتقديم خدمة سريعة، موثوقة، ومضمونة.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Clock className="w-6 h-6 text-blue-600" />, text: "استجابة سريعة وخدمة في نفس اليوم" },
                  { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, text: "ضمان على جميع أعمال الصيانة والتركيب" },
                  { icon: <CheckCircle className="w-6 h-6 text-blue-600" />, text: "أسعار تنافسية وشفافية تامة" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xl font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src={img2}
                alt="فريق العمل"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 bg-blue-600 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">هل تعاني من مشاكل في التكييف؟</h2>
          <p className="text-blue-100 text-xl md:text-2xl mb-10">
            فريقنا جاهز لخدمتك الآن! اتصل بنا وسنصلك في أسرع وقت.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href={callLink} className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-blue-600 font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl">
              0561278331
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 py-8 text-center border-t border-slate-800 flex flex-col items-center gap-2">
        <p className="text-slate-400">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - الرؤية الذهبية للخدمات الفنية
        </p>
        <p className="text-slate-500 text-sm">
          تم الإنشاء بواسطة{' '}
          <a href="https://nasharhub.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
            NasharHub
          </a>
        </p>
      </footer>

      {/* --- FLOATING BUTTONS --- */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/40 transition-transform hover:scale-110 flex items-center justify-center animate-bounce group"
          aria-label="تواصل معنا عبر واتساب"
        >
          <MessageCircle className="w-7 h-7 group-hover:animate-pulse" />
        </a>
        <a 
          href={callLink}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/40 transition-transform hover:scale-110 flex items-center justify-center group"
          aria-label="اتصل بنا"
        >
          <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </main>
  );
}
