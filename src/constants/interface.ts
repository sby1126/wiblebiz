import { ListItemProps, ListPageInfoProps, TabItemProps } from './types'

export interface RadioBtnOption {
    label: string
    name: string
    value: string
}

export interface RadioBtnGroupProps {
    options: RadioBtnOption[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export interface RadioBtnProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export interface ListResponse {
    pageInfo: ListPageInfoProps
    items: ListItemProps[]
}
