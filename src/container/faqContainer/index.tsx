'use client'
import TabBtnGroup from '@/component/TabBtn/TabBtnGroup'
import { QuerystionForm } from '@/component/Question'
import { ListGroup } from '@/component/List/ListGroup'
import { UsageProcess } from '@/component/UsageProcess'
import { ServiceReq } from '@/component/ServiceReq'
import { AppStore } from '@/component/AppStore'
import FilterGroup from '@/component/Filter'
import { SearchInfo } from '@/component/SearchInfo'

export function FaqContainer() {
    return (
        <div className="content">
            <h1>
                자주 묻는 질문
                <em>궁금하신 내용을 빠르게 찾아보세요.</em>
            </h1>
            <i className="sticky-checker"></i>
            <TabBtnGroup />
            <QuerystionForm />
            <FilterGroup />
            <ListGroup />
            <ServiceReq />
            <UsageProcess />
            <AppStore />
        </div>
    )
}
