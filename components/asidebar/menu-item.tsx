import Link from 'next/link';

interface MenuItemProps {
  label: string;
  path?: string;
  subMenu?: MenuItemProps[];
  current?: string;
  size?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, path, subMenu, current, size }) => {
  const isActive = path && current === path;

  return (
    <div className="mb-2">
      {path ? (
        <Link href={path} className={`block rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-200 text-sm p-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
          {label}
        </Link>
      ) : (
        <p className="block p-1 text-gray-1000 font-bold">{label}</p>
      )}
      {subMenu && (
        <div className="ml-4">
          {subMenu.map((subItem, index) => (
            <MenuItem key={index} {...subItem} current={current} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;