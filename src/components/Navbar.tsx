import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const directoryItems = [
    { title: "Education Sector", href: "/directory/education" },
    { title: "Health & Fitness", href: "/directory/health" },
    { title: "Religious Places", href: "/directory/religious" },
    { title: "Government & Community", href: "/directory/government" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
              <span className="text-lg font-bold text-primary-foreground">IN</span>
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-semibold text-foreground">THE NEW INDRALOK</div>
              <div className="text-xs text-muted-foreground">CHS LTD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive("/") ? "secondary" : "ghost"} className="font-medium">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive("/about") ? "secondary" : "ghost"} className="font-medium">
                About Us
              </Button>
            </Link>
            <Link to="/committee">
              <Button variant={isActive("/committee") ? "secondary" : "ghost"} className="font-medium">
                Committee
              </Button>
            </Link>
            <Link to="/activities">
              <Button variant={isActive("/activities") ? "secondary" : "ghost"} className="font-medium">
                Activities
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant={isActive("/projects") ? "secondary" : "ghost"} className="font-medium">
                Projects
              </Button>
            </Link>

            {/* Directory Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">Directory</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                      {directoryItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/gallery">
              <Button variant={isActive("/gallery") ? "secondary" : "ghost"} className="font-medium">
                Gallery
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "secondary" : "ghost"} className="font-medium">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-in">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive("/") ? "secondary" : "ghost"} className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive("/about") ? "secondary" : "ghost"} className="w-full justify-start">
                About Us
              </Button>
            </Link>
            <Link to="/committee" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive("/committee") ? "secondary" : "ghost"} className="w-full justify-start">
                Committee
              </Button>
            </Link>
            <Link to="/activities" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive("/activities") ? "secondary" : "ghost"} className="w-full justify-start">
                Activities
              </Button>
            </Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive("/projects") ? "secondary" : "ghost"} className="w-full justify-start">
                Projects
              </Button>
            </Link>
            <div className="pl-4 pt-2 pb-1">
              <div className="text-sm font-semibold text-muted-foreground">Directory</div>
            </div>
            {directoryItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start pl-8 text-sm">
                  {item.title}
                </Button>
              </Link>
            ))}
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive("/gallery") ? "secondary" : "ghost"} className="w-full justify-start">
                Gallery
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isActive("/contact") ? "secondary" : "ghost"} className="w-full justify-start">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
