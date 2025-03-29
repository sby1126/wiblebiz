export type StringProps = {
    param: string
}

//---- header
export type NavLinkProps = {
    name: string
    link: string
}

//---- radio button props
export type TabGroupProps = {
    [key: string]: TabItemProps[]
}

export type TabItemProps = {
    name: string
    category: string
    apiLink: string
}

export type CategoryItemProps = {
    categoryID: string
    name: string
}

export type ListParam = {
    tab: string
    limit: number
    offset: number
    faqCategoryID: string | undefined
    question: string | undefined
}

export type ListPageInfoProps = {
    totalRecord: number
    offset: number
    limit: number
    prevOffset: number
    nextOffset: number
}

export type ListItemProps = {
    id: number
    categoryName: string
    subCategoryName: string
    question: string
    answer: string
}
