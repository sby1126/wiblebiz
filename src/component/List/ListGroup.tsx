import { listCountState, listQueryState, tabState } from '@/recoil/atoms'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ListItem } from '.'
import useList from '@/app/hooks/useList'
import { NoData } from '../NoData'
import { ListItemProps } from '@/constants/types'

export function ListGroup() {
    const [listQuery, setlistQuery] = useRecoilState(listQueryState)
    const [sendQuery, setSendQeury] = useState('')
    const [renderList, setRenderList] = useState<ListItemProps[]>([])

    // get Recoil State
    const currentTab = useRecoilValue(tabState)
    const setListCount = useSetRecoilState(listCountState)

    useEffect(() => {
        setSendQeury('')
    }, [currentTab])

    useEffect(() => {
        if (currentTab.length > 0) {
            makesSendQuery()
        }
    }, [listQuery])

    const makesSendQuery = useCallback(() => {
        let query = `limit=${listQuery.limit}&offset=${listQuery.offset}&tab=${currentTab}`
        query +=
            listQuery.faqCategoryID.length > 0
                ? `&faqCategoryID=${listQuery.faqCategoryID}`
                : ''
        query +=
            listQuery.question.length > 0
                ? `&question=${listQuery.question}`
                : ''
        setSendQeury(query)
    }, [listQuery, currentTab])

    const { list, isLoading } = useList(sendQuery)

    useEffect(() => {
        if (list != undefined && list != null) {
            setListCount(list?.pageInfo.totalRecord)

            if (listQuery.offset == 0) {
                setRenderList(list.items)
            } else {
                let prevList = [...renderList]
                const currList = prevList.concat(list.items)
                setRenderList(currList)
            }
        }
    }, [list])

    function makeMoreList() {
        setlistQuery({
            ...listQuery,
            offset: list?.pageInfo.nextOffset as number,
        })
    }

    return (
        <>
            {isLoading != undefined && isLoading && (
                <div className="loading-indicator">
                    <i></i>
                </div>
            )}
            {renderList != null && renderList.length > 0 && (
                <ul className="faq-list">
                    {renderList.map((item, idx) => (
                        <ListItem
                            key={idx}
                            id={item.id}
                            categoryName={item.categoryName}
                            subCategoryName={item.subCategoryName}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </ul>
            )}
            {list != undefined && renderList.length == 0 && <NoData />}
            {list != undefined &&
                list.pageInfo.totalRecord > renderList.length && (
                    <button
                        type="button"
                        className="list-more"
                        onClick={() => makeMoreList()}
                    >
                        <i></i>더보기
                    </button>
                )}
        </>
    )
}
