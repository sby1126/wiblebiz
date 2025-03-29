import { tabItem } from '@/constants/data'
import { FaqContainer } from '@/container/faqContainer'
import { GuideContainer } from '@/container/guideContainer'
import { NewsContainer } from '@/container/newsContainer'

type Props = {
    params: {
        slug: string
    }
}

export default function Conatainer({ params }: Props) {
    return (
        <>
            {params.slug == 'Guide' && <GuideContainer />}
            {params.slug == 'FAQ' && <FaqContainer />}
            {params.slug == 'News' && <NewsContainer />}
        </>
    )
}

export function generateMetadata({ params }: Props) {
    return {
        title: `${
            tabItem[params.slug][0].name
        } | 기아 비즈(Kia Biz)-친환경 모빌리티 서비스`,
    }
}
