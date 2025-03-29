import { ListResponse } from '@/constants/interface'
import { ListItemProps } from '@/constants/types'
import { tabState } from '@/recoil/atoms'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'

export function ListItem(props: ListItemProps) {
    const [answerToggle, setAnswerToggle] = useState(false)
    const currentTab = useRecoilValue(tabState)
    const { categoryName, subCategoryName, question, answer } = props
    const liRef = useRef<HTMLLIElement>(null)
    const answerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const toggleAnnwer = useCallback(() => {
        if (!answerToggle) {
            liRef.current?.classList.add('active')
            liRef.current?.classList.add('ing')
        } else {
            liRef.current?.classList.remove('active')
            liRef.current?.classList.remove('show')
            liRef.current?.classList.add('ing')
        }
        setAnswerToggle(!answerToggle)
    }, [answerToggle])

    useEffect(() => {
        if (answerToggle) {
            answerRef.current?.style.setProperty(
                'height',
                `${innerRef.current?.offsetHeight}px`
            )
        } else {
            answerRef.current?.style.setProperty('height', '0')
        }
    }, [answerToggle])

    return (
        <li id="list-li" data-ui-item="true" ref={liRef}>
            <h4 className="a">
                <button
                    type="button"
                    data-ui-click="dropdown-toggle"
                    onClick={() => toggleAnnwer()}
                >
                    {currentTab == 'USAGE' && <em>{categoryName}</em>}
                    <em>{subCategoryName}</em>
                    <strong>{question}</strong>
                </button>
            </h4>
            <div className="q" data-ui-target="true" ref={answerRef}>
                <div
                    className="inner"
                    ref={innerRef}
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
            </div>
        </li>
    )
}
