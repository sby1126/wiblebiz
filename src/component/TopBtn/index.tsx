'use client'
import { useState, useEffect } from 'react'

export function TopBtn() {
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className={`quick-util ${completion > 0 ? 'active' : ''}`}>
            <div className="inner">
                <button
                    type="button"
                    className="top"
                    data-ui-click="scroll-top"
                    onClick={() => scrollToTop()}
                >
                    상단으로
                </button>
            </div>
        </div>
    )
}
