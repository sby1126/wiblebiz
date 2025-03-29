import { TabItemProps } from '@/constants/types'
import { tabState } from '@/recoil/atoms'
import { useRecoilState } from 'recoil'

export default function TabBtn({ name, category, apiLink }: TabItemProps) {
    const [currentTab, setCurrentTab] = useRecoilState(tabState)

    return (
        <li className={currentTab == category ? 'active' : ''}>
            <a onClick={() => setCurrentTab(category)}>
                <span>{name}</span>
            </a>
        </li>
    )
}
