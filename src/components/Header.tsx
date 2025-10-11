import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  submenu?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    submenu: [
      { label: "Vision and Mission", href: "/about/vision-mission" },
      { label: "Our History", href: "/about/history" },
      { label: "Identity of Community", href: "/about/identity" },
      { label: "Star Personalities", href: "/about/star-personalities" },
      { label: "Success Stories", href: "/about/success-stories" },
    ],
  },
  {
    label: "Members Directory",
    href: "/members",
    hasDropdown: true,
    submenu: [
      { label: "Directory", href: "/members/directory" },
      { label: "Advanced Search", href: "/members/advanced-search" },
      { label: "Today's Birthday", href: "/members/todays-birthday" },
      { label: "Upcoming Birthdays", href: "/members/upcoming-birthdays" },
      { label: "Today's Anniversary", href: "/members/todays-anniversary" },
      { label: "Upcoming Anniversary", href: "/members/upcoming-anniversary" },
    ],
  },
  {
    label: "Social Issues",
    href: "/social-issues",
    hasDropdown: true,
    submenu: [
      { label: "Historical Events", href: "/social-issues/historical-events" },
      { label: "Issues", href: "/social-issues/issues" },
      { label: "Reports", href: "/social-issues/reports" },
      { label: "Others", href: "/social-issues/others" },
    ],
  },
  {
    label: "Job Opportunity",
    href: "/jobs",
    hasDropdown: true,
    submenu: [
      { label: "Jobs", href: "/jobs/list" },
      { label: "Add New Job", href: "/jobs/add" },
    ],
  },
  {
    label: "Matrimonial",
    href: "/matrimonial",
    hasDropdown: true,
    submenu: [
      { label: "Register", href: "/matrimonial/register" },
      { label: "Bride", href: "/matrimonial/bride" },
      { label: "Groom", href: "/matrimonial/groom" },
      { label: "Add New Profile", href: "/matrimonial/add" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    hasDropdown: true,
    submenu: [
      { label: "Past Events", href: "/events/past" },
      { label: "Upcoming Events", href: "/events/upcoming" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    hasDropdown: true,
    submenu: [
      { label: "News", href: "/media/news" },
      { label: "Photos", href: "/media/photos" },
      { label: "Videos", href: "/media/videos" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    hasDropdown: true,
    submenu: [
      { label: "Education", href: "/blog/education" },
      { label: "Entrepreneurship", href: "/blog/entrepreneurship" },
      { label: "Social", href: "/blog/social" },
    ],
  },
  { label: "Donation", href: "/donation" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="bg-gray-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-orange-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm hover:text-orange-400 transition-colors">
              LOGIN
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded text-sm transition-colors">
              BECOME A MEMBER
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                VANJARI WORLD
              </h1>
            </div>
            <div className="ml-4 h-12 w-20 bg-orange-500 clip-flag"></div>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } lg:block pb-4 lg:pb-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-1 space-y-2 lg:space-y-0">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <div className="flex items-center">
                  <a
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded transition-colors ${
                      index === 0
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-haspopup={item.hasDropdown ? "true" : undefined}
                    aria-expanded={
                      item.hasDropdown ? !!openSubmenus[index] : undefined
                    }
                    role="menuitem"
                    onKeyDown={(e) => {
                      if (
                        item.hasDropdown &&
                        (e.key === "Enter" || e.key === " ")
                      ) {
                        e.preventDefault();
                        toggleSubmenu(index);
                      }
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </a>

                  {/* Mobile toggle button for submenu */}
                  {item.hasDropdown && (
                    <button
                      className="lg:hidden px-3"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() => toggleSubmenu(index)}
                    >
                      <ChevronDown
                        size={18}
                        className={`${
                          openSubmenus[index] ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Desktop dropdown (hover) */}
                {item.hasDropdown && item.submenu && (
                  <div className="hidden lg:absolute lg:top-full lg:left-0 lg:mt-1 lg:bg-white lg:shadow-lg lg:rounded lg:min-w-[220px] lg:group-hover:block">
                    <ul className="py-2" role="menu">
                      {item.submenu.map((sub, si) => (
                        <li key={si}>
                          <a
                            href={sub.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mobile submenu (collapsible) */}
                {item.hasDropdown && item.submenu && (
                  <div
                    className={`${
                      openSubmenus[index] ? "block" : "hidden"
                    } lg:hidden px-4`}
                  >
                    <ul className="pl-4">
                      {item.submenu.map((sub, si) => (
                        <li key={si} className="py-1">
                          <a href={sub.href} className="text-gray-700 block">
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        .clip-flag {
          clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);
        }
      `}</style>
    </header>
  );
}
