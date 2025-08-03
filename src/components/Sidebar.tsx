import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Compass,
  Youtube,
  Library,
  Bell,
  Video,
  Download
} from "lucide-react";
import Link from "next/link";
import "./AppStyles.css";

const links = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Explore", icon: Compass, href: "#" },
  { label: "Shorts", icon: Video, href: "#" },
  { label: "Subscriptions", icon: Youtube, href: "#" },
  { label: "Notifications", icon: Bell, href: "#" },
  { label: "Library", icon: Library, href: "#" },
  { label: "Download", icon: Download, href: "https://www.youtube.com/feed/downloads" },
];

export default function Sidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="sidebar-trigger">
          <Menu className="sidebar-menu-icon" />
        </SheetTrigger>
        <SheetContent side="left" className="sidebar-sheet-content">
          <VisuallyHidden>
            <h2 id="sidebar-dialog-title">Sidebar Menu</h2>
          </VisuallyHidden>
          <aside className="sidebar" aria-labelledby="sidebar-dialog-title">
            <nav className="sidebar-nav">
              <Link href="/" aria-label="YouTube Home">
                <Image
                  src="/images/yout.jpg"
                  alt="YouTube Logo"
                  width={100}
                  height={50}
                  className="sidebar-logo"
                />
              </Link>
              {links.map(({ label, icon: Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="sidebar-link"
                >
                  <Icon size={20} />
                  <span className="sidebar-link-label">{label}</span>
                </Link>
              ))}
            </nav>
            <h3 className="sidebar-subscriptions-title">
              SUBSCRIPTIONS
            </h3>
            <a href="/" className="sidebar-subscription">
              <Image
                src="/images/user.jpg"
                alt="Jack"
                width={28}
                height={28}
                className="sidebar-subscription-avatar"
              />
              <span>Me</span>
            </a>
          </aside>
        </SheetContent>
      </Sheet>
    </>
  );
}

export function Minibar() {
  return (
    <aside className="minibar" aria-labelledby="sidebar-dialog-title">
      <nav className="minibar-nav">
        {links.map(({ icon: Icon, href }) => (
          <a
            key={1 + Math.random()}
            title="Navigate"
            href={href}
            className="minibar-link"
          >
            <Icon size={20} />
          </a>
        ))}
      </nav>
    </aside>
  );
}