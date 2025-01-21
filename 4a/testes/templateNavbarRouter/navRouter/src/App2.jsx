// Principais mudanças:

// Indicador de Rota Ativa:

// Adicionei o hook useLocation para detectar a rota atual
// Criei a função isActivePath para verificar se um link está ativo
// Links ativos agora têm fundo cinza (bg-gray-100) e texto mais escuro
// Adicionei hover states para os links não ativos


// Transições Suaves:

// Adicionei transition-colors duration-200 nos links para suavizar mudanças de cor
// O menu mobile agora tem uma animação suave de altura e opacidade usando:

// transition-all duration-300 ease-in-out
// max-h-64 quando aberto e max-h-0 quando fechado
// opacity-100 quando aberto e opacity-0 quando fechado


// O ícone do menu também tem uma transição suave


// Melhorias de UX:

// Hover states mais suaves em todos os elementos interativos
// Feedback visual mais claro para a navegação atual
// Animações suaves em todas as interações

// Você pode ajustar:

// A duração das transições mudando duration-200 ou duration-300
// As cores do indicador ativo mudando bg-gray-100 e text-gray-900
// O estilo do hover mudando hover:bg-gray-50


import { useState } from 'react';
import { Link, Outlet, createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Componentes das páginas (exemplo)
const Home = () => <div>Página Home <p>Tip: O readme deste projetinho tem informações sobre responsividade no Tailwind.</p></div>;
const Sobre = () => <div>Página Sobre</div>;
const Produtos = () => <div>Página Produtos</div>;
const Contato = () => <div>Página Contato</div>;

// Componente Layout
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Sobre', path: '/sobre' },
    { title: 'Produtos', path: '/produtos' },
    { title: 'Contato', path: '/contato' },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${isActivePath(item.path)
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none transition-transform duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu com animação */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? 'max-h-64 opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                    ${isActivePath(item.path)
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
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
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'produtos', element: <Produtos /> },
      { path: 'contato', element: <Contato /> }
    ]
  }
]);

// Componente App principal
const App2 = () => {
  return <RouterProvider router={router} />;
};

export default App2;