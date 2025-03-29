'use client'

import useCategory from '@/app/hooks/useCategory'
import { RadioBtnOption } from '@/constants/interface'
import { listQueryState, tabState } from '@/recoil/atoms'
import { useState, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import RadioBtnGroup from '../RadioBtn/RadioBtnGroup'

export default function FilterGroup() {
    //constatns, state
    const [radioOption, setRadioOption] = useState<RadioBtnOption[]>([])
    const firstOpt: RadioBtnOption = {
        label: '전체',
        value: '',
        name: 'filter',
    }
    // recoil
    const currentTab = useRecoilValue(tabState)
    const [listQuery, setlistQuery] = useRecoilState(listQueryState)

    //swr hooks
    const { categoryItem } = useCategory(currentTab)

    // function
    function radioBtnGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setlistQuery({
            ...listQuery,
            faqCategoryID: event.target.value,
            offset: 0,
        })
    }

    function setDefaultFilter() {
        setlistQuery({
            ...listQuery,
            faqCategoryID: firstOpt.value,
            offset: 0,
            question: '',
        })
    }

    // effect
    useEffect(() => {
        setDefaultFilter()
    }, [])

    useEffect(() => {
        setDefaultFilter()
    }, [currentTab])

    useEffect(() => {
        let optArr: RadioBtnOption[] = []
        optArr.push(firstOpt)
        if (categoryItem != undefined) {
            categoryItem.forEach((item) => {
                let opt = {
                    label: item.name,
                    name: 'filter',
                    value: item.categoryID,
                }
                optArr.push(opt)
            })
        }
        setRadioOption(optArr)
    }, [categoryItem])

    return (
        <RadioBtnGroup
            options={radioOption}
            onChange={radioBtnGroupHandler}
            value={listQuery.faqCategoryID}
        />
    )
}
