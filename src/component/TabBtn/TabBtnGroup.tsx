'use client'
import { listQueryState, tabState } from '@/recoil/atoms'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import TabBtn from '.'
import { usePathname } from 'next/navigation'
import { tabItem } from '@/constants/data'

export default function TabBtnGroup() {
    //tabs
    const path = usePathname().replace('/', '')
    const tabs = tabItem[path]

    //recoil
    const setCurrentTab = useSetRecoilState(tabState)

    useEffect(() => {
        setCurrentTab(tabs[0].category)
    }, [])

    function renderOptions() {
        return tabs.map((item, idx) => {
            return (
                <TabBtn
                    key={idx}
                    name={item.name}
                    category={item.category}
                    apiLink={item.apiLink}
                />
            )
        })
    }

    return <ul className="tabs">{renderOptions()}</ul>
}
