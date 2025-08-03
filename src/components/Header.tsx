import Image from "next/image";
import Sidebar from "./Sidebar";
import { Upload, MoreVertical, Bell, Search, User } from "lucide-react";
import Link from "next/link";
import "./AppStyles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Sidebar />
        <Link href="/" aria-label="YouTube Home">
          <Image
            src="/images/yout.jpg"
            alt="YouTube Logo"
            width={100}
            height={50}
            className="header-logo"
          />
        </Link>
      </div>
      <div className="header-center">
        <form className="header-search-form">
          <input
            type="text"
            placeholder="Search"
            className="header-search-input"
            aria-label="Search"
          />
          <button
            type="submit"
            aria-label="Search"
            className="header-search-btn"
          >
            <Search />
          </button>
        </form>
      </div>
      <div className="header-right">
        <button aria-label="Upload" className="header-icon-btn">
          <Upload className="header-icon" />
        </button>
        <button aria-label="More options" className="header-icon-btn">
          <MoreVertical className="header-icon" />
        </button>
        <button aria-label="Notifications" className="header-icon-btn">
          <Bell className="header-icon" />
        </button>
        <User />
      </div>
    </header>
  );
}