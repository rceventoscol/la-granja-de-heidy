
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import TiendaPage from "./components/TiendaPage";

// Inicializamos el cliente de React Query
const queryClient = new QueryClient();

const App = () => {
  // Efecto para establecer propiedades del documento
  useEffect(() => {
    document.title = "EcoFresh - Tienda Orgánica";
    
    // Establecer el favicon (opcional)
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = '/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Tienda y subcategorías */}
            <Route path="/tienda" element={<TiendaPage />} />
            <Route path="/tienda/:categoria" element={<TiendaPage />} />
            <Route path="/producto/:id" element={<Index />} />
            
            {/* Conócenos */}
            <Route path="/conocenos" element={<Index />} />
            <Route path="/conocenos/:seccion" element={<Index />} />
            
            {/* Blog */}
            <Route path="/blog" element={<Index />} />
            <Route path="/blog/:id" element={<Index />} />
            
            {/* Página 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
