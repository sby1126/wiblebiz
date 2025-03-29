import { Header } from '@/container/header'
import type { Metadata } from 'next'
import '../../public/style/ui.common.css'
import { Footer } from '@/container/footer'
import RecoilProvider from '../component/RecoilProvider'
import Indicator from '@/component/Indicator'
import { TopBtn } from '@/component/TopBtn'
export const metadata: Metadata = {
    title: '차량 구독 패키지 소개',
    description: 'My Art Rooms',
    // icons: {
    //   icon: "/favicon.ico",
    // },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <RecoilProvider>
            <html lang="en">
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <body>
                    <div className="wrapper">
                        {/* <i className="sticky-checker"></i> */}
                        <Indicator />
                        <Header />
                        <div className="container">{children}</div>
                        <TopBtn />
                        <Footer />
                    </div>
                </body>
            </html>
        </RecoilProvider>
    )
}
