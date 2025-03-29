'use client'

import { useEffect, useState } from 'react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'

export function Header() {
    const [mobileToggle, setMobileToggle] = useState(false)
    const pathName = usePathname()

    useEffect(() => {
        mobileToggle
            ? document.body.classList.add('nav-opened')
            : document.body.classList.remove('nav-opened')
    }, [mobileToggle])

    useEffect(() => {
        setMobileToggle(false)
    }, [pathName])

    return (
        <header>
            <div className="inner">
                <a className="logo" href="/">
                    Kia BIZ
                </a>
                <nav>
                    <NavItem />
                </nav>
                {/* mobile toggle */}
                <span className="util">
                    <button
                        type="button"
                        className="nav"
                        data-ui-click="nav-toggle"
                        onClick={() => setMobileToggle(!mobileToggle)}
                    >
                        메뉴 열기/닫기
                    </button>
                </span>
            </div>
        </header>
    )
}
