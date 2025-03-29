import { CategoryItemProps } from '@/constants/types'
import useSWR from 'swr'
import fetch from '@/utils/fetch'

const useCategory = (tab: string) => {
    const { data } = useSWR<CategoryItemProps[] | null>(
        () => (tab.length > 0 ? `/api/category?tab=${tab}` : null),
        fetch
    )
    return {
        categoryItem: data,
    }
}
export default useCategory
