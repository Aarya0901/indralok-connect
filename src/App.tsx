import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsTicker from "./components/NewsTicker";
import Home from "./pages/Home";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Activities from "./pages/Activities";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import DirectoryEducation from "./pages/DirectoryEducation";
import DirectoryHealth from "./pages/DirectoryHealth";
import DirectoryReligious from "./pages/DirectoryReligious";
import DirectoryGovernment from "./pages/DirectoryGovernment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <NewsTicker />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/directory/education" element={<DirectoryEducation />} />
              <Route path="/directory/health" element={<DirectoryHealth />} />
              <Route path="/directory/religious" element={<DirectoryReligious />} />
              <Route path="/directory/government" element={<DirectoryGovernment />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
