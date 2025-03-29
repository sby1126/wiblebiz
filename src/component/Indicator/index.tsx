'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Indicator() {
    const [completion, setCompletion] = useState(0)
    useEffect(() => {
        const updateScrollCompleltion = () => {
            const currentProgress = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight
            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                )
            }
        }

        window.addEventListener('scroll', updateScrollCompleltion)

        return () => {
            window.removeEventListener('scroll', updateScrollCompleltion)
        }
    }, [])

    return (
        <i
            className={`sticky-checker ${completion > 0 ? 'is-pinned' : ''}`}
        ></i>
    )
}
