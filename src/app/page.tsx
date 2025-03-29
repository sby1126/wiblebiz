import { HomeContainer } from '@/container/homeContainer'
import { redirect } from 'next/navigation'

export default function Home(data: FormData) {
    return <HomeContainer />
}

export function generateMetadata() {
    return {
        title: `기아 비즈(Kia Biz)`,
    }
}
