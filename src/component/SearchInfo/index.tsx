import { listCountState, listQueryState } from '@/recoil/atoms'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export function SearchInfo() {
    const searchCount = useRecoilValue(listCountState)
    const [listQuery, setListQuery] = useRecoilState(listQueryState)

    function cleanListQuery() {
        const query = { ...listQuery, faqCategoryID: '', question: '' }
        setListQuery(query)
    }
    return (
        <div className="search-info">
            <h2 className="heading-info">
                검색결과 총 <em>{searchCount}</em>건
            </h2>
            <button
                type="button"
                className="init"
                onClick={() => {
                    cleanListQuery()
                }}
            >
                검색초기화
            </button>
        </div>
    )
}
