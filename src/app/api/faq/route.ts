import { consultData, usageData } from '@/constants/data'
import { cousultListData, usageListData } from '@/constants/data'
import { ListResponse } from '@/constants/interface'
import { ListPageInfoProps } from '@/constants/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    //const params = req.nextUrl.searchParams;
    const query = req.nextUrl.searchParams
    const isConsult = query.get('tab') === 'CONSULT'

    const list = isConsult ? cousultListData : usageListData
    let filterList = [...list]

    if (query.get('faqCategoryID') != undefined) {
        const selectCategory = isConsult
            ? consultData.filter(
                  (item) => item.categoryID == query.get('faqCategoryID')
              )
            : usageData.filter(
                  (item) => item.categoryID == query.get('faqCategoryID')
              )
        filterList = filterList.filter(
            (item) =>
                selectCategory[0].name ==
                (isConsult ? item.subCategoryName : item.categoryName)
        )
    }

    if (query.get('question') != undefined) {
        filterList = filterList.filter(
            (item) =>
                item.subCategoryName.indexOf(query.get('question') as string) >
                    -1 ||
                item.question.indexOf(query.get('question') as string) > -1 ||
                item.answer.indexOf(query.get('question') as string) > -1
        )
    }

    const record = filterList.length

    if (record > Number(query.get('limit'))) {
        filterList = filterList.slice(
            Number(query.get('offset')),
            Number(query.get('offset')) + Number(query.get('limit'))
        )
    }

    const info: ListPageInfoProps = {
        totalRecord: record,
        offset: Number(query.get('offset')),
        limit: 10,
        prevOffset:
            Number(query.get('offset')) - 10 > 0
                ? Number(query.get('offset')) - 10
                : 0,
        nextOffset: Number(query.get('offset')) + 10,
    }

    const result: ListResponse = {
        pageInfo: info,
        items: filterList,
    }

    return NextResponse.json(result)
}
