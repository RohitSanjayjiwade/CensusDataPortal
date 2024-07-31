import Link from 'next/link';

interface MenuItemProps {
  label: string;
  path: string;
  current?: string;
}

const NavMenuItem: React.FC<MenuItemProps> = ({ label, path, current }) => {
  const isActive = path && current === path;

  return (
    <div className="mb-2">
        <Link href={path} className={`block rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-200 text-sm p-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
          {label}
        </Link>
    </div>
  );
};

export default NavMenuItem;