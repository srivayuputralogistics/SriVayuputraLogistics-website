import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { assetUrl } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Business", href: "/business-activities" },
  { label: "Network", href: "/network" },
  { label: "Timeline", href: "/timeline" },
  { label: "Clients", href: "/clients" },
  { label: "Financial", href: "/financial-performance" },
  { label: "Downloads", href: "/downloads" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-40 w-full bg-card border-b border-border shadow-subtle"
      data-ocid="navbar"
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0"
          data-ocid="navbar.logo_link"
        >
          <img
            src={assetUrl("/assets/images/Gemini_Generated_Image_7zhbcc7zhbcc7zhb.png")}
            alt="Sri Vayuputra Logistics Logo"
            className="w-16 h-16 rounded-full flex-shrink-0 object-cover"
          />
          <div className="hidden sm:block min-w-0">
            <div className="font-display font-bold text-base leading-tight text-foreground truncate">
              Sri Vayuputra Logistics
            </div>
            <div className="text-sm text-muted-foreground leading-tight truncate">
              3PL &middot; 4PL &middot; Transport &middot; PET
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              data-ocid={`navbar.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-smooth ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Login + Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
            data-ocid="navbar.login_button"
          >
            <Link to="/login">Login</Link>
          </Button>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
                data-ocid="navbar.mobile_menu_button"
              >
                {open ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-10">
              <div className="flex items-center gap-3 mb-6 px-1">
                <img
                  src={assetUrl("/assets/images/Gemini_Generated_Image_7zhbcc7zhbcc7zhb.png")}
                  alt="Sri Vayuputra Logistics Logo"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
                />
                <span className="font-display font-bold text-base">
                  Sri Vayuputra Logistics
                </span>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    data-ocid={`navbar.mobile_${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-smooth ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-border mt-3 pt-3">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    data-ocid="navbar.mobile_login_link"
                    className="flex items-center justify-center px-3 py-2.5 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                  >
                    Login to ERP
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
