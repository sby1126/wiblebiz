import { atom } from 'recoil'

export const tabState = atom({
    key: 'currentTab',
    default: '',
})

export const listQueryState = atom({
    key: 'listQuery',
    default: {
        limit: 10,
        offset: 0,
        faqCategoryID: '',
        question: '',
    },
})

export const listCountState = atom({
    key: 'listCount',
    default: 0,
})
