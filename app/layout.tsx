import type {Metadata} from 'next';
import {Tajawal} from 'next/font/google';
import './globals.css'; // Global styles

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'الرؤية الذهبية لصيانة المكيفات',
  description: 'صيانة، تركيب، وتنظيف مكيفات في دبي، عجمان، والشارقة',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
