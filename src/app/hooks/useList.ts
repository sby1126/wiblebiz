import { ListResponse } from '@/constants/interface'
import useSWR from 'swr'
import fetch from '@/utils/fetch'

const useList = (query: string) => {
    const { data, isLoading } = useSWR<ListResponse | null>(
        () => (query.length > 0 ? `/api/faq?${query}` : null),
        fetch
    )
    return {
        list: data,
        isLoading: isLoading,
    }
}
export default useList
