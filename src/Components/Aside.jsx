import { MdDashboard } from "react-icons/md";
import { FaClipboardCheck, FaInbox, FaProductHunt, FaSign, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavItem({ href, icon: Icon, label, badge }) {
  return (
    <li>
      <Link to={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
        {badge && (
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            {badge}
          </span>
        )}
      </Link>
    </li>
  );
}

function Aside() {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <NavItem href="/dashboard" icon={MdDashboard } label="Dashboard" />
          <NavItem href="/c" icon={FaClipboardCheck} label="Kanban" badge="Pro" />
          <NavItem href="/c" icon={FaInbox} label="Inbox" badge="26" />
          <NavItem href="/c" icon={FaUser} label="Users"  badge="200"/>
          <NavItem href="/c" icon={FaProductHunt} label="Products"  badge="10"/>
          <NavItem href="/c" icon={FaSign} label="Sign In"  badge="3"/>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;