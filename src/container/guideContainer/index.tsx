'use client'
import TabBtnGroup from '@/component/TabBtn/TabBtnGroup'
import { UsageProcess } from '@/component/UsageProcess'
import { ServiceReq } from '@/component/ServiceReq'
import { AppStore } from '@/component/AppStore'

export function GuideContainer() {
    return (
        <div className="content">
            <h1>
                서비스 소개
                <em>기아 비즈만의 차별화된 비즈니스 상품을 제안합니다.</em>
            </h1>
            <i className="sticky-checker"></i>
            <TabBtnGroup />
            <ServiceReq />
            <UsageProcess />
            <AppStore />
        </div>
    )
}
