import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'VelesManager - Интеллектуальная система мониторинга',
  description: 'Профессиональная система анализа и мониторинга торговых операций',
  keywords: 'мониторинг, аналитика, риск-менеджмент, торговля, VelesManager',
  openGraph: {
    title: 'VelesManager',
    description: 'Интеллектуальная система мониторинга и анализа торговых операций',
    url: 'https://veles.solutions',
    siteName: 'VelesManager',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">VelesManager</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Возможности
                </a>
                <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Демо
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Тарифы
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Контакты
                </a>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">VelesManager</h3>
                <p className="text-gray-400">
                  Профессиональное решение для мониторинга и анализа
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Продукт</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Возможности</a></li>
                  <li><a href="#" className="hover:text-white">Тарифы</a></li>
                  <li><a href="#" className="hover:text-white">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Компания</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">О нас</a></li>
                  <li><a href="#" className="hover:text-white">Блог</a></li>
                  <li><a href="#" className="hover:text-white">Карьера</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Поддержка</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Документация</a></li>
                  <li><a href="#" className="hover:text-white">Контакты</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 VelesManager. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}