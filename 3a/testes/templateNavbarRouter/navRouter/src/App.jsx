// esta é a primeira versão, mais simples e direta. App2 tem uma mais embelezada

import { useState } from 'react';
import { Link, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Componentes das páginas (exemplo)
const Home = () => <div>Página Home</div>;
const Sobre = () => <div>Página Sobre</div>;
const Produtos = () => <div>Página Produtos</div>;
const Contato = () => <div>Página Contato</div>;

// Componente Layout
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Sobre', path: '/sobre' },
    { title: 'Produtos', path: '/produtos' },
    { title: 'Contato', path: '/contato' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Logo
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © 2024 Sua Empresa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'sobre',
        element: <Sobre />
      },
      {
        path: 'produtos',
        element: <Produtos />
      },
      {
        path: 'contato',
        element: <Contato />
      }
    ]
  }
]);

// Componente App principal
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;