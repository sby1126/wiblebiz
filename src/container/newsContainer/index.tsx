'use client'
import TabBtnGroup from '@/component/TabBtn/TabBtnGroup'
import { UsageProcess } from '@/component/UsageProcess'
import { ServiceReq } from '@/component/ServiceReq'
import { AppStore } from '@/component/AppStore'

export function NewsContainer() {
    return (
        <div className="content">
            <h1>
                새소식
                <em>기아 비즈의 새로운 소식을 알려드립니다.</em>
            </h1>
            <i className="sticky-checker"></i>
            <TabBtnGroup />
        </div>
    )
}
