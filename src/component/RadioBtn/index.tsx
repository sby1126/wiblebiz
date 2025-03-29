import { RadioBtnProps } from '@/constants/interface'

const RadioBtn = ({
    label,
    id,
    value,
    checked,
    onChange,
    ...rest
}: RadioBtnProps) => {
    return (
        <label>
            <input
                type="radio"
                name="filter"
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <i>{label}</i>
        </label>
    )
}

export default RadioBtn
