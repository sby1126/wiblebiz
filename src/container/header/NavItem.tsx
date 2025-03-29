import { navItems } from '@/constants/data';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function NavItem() {
    const currentPath = usePathname();
    const [currentTabs, setCurrentTabs] = useState(currentPath);

    const onClickNavItem = (link: string) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentTabs(link);
    };
    return (
        <ul>
            {navItems.map((item, idx) => {
                return (
                    <li key={idx} className={currentTabs == item.link ? 'active' : ''}>
                        <Link href={item.link} onClick={() => onClickNavItem(item.link)}>
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
