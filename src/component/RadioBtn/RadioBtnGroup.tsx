import { RadioBtnGroupProps } from '@/constants/interface'
import RadioBtn from '.'

const RadioBtnGroup = ({ options, onChange, value }: RadioBtnGroupProps) => {
    function renderOptions() {
        const currVal = value
        return options.map((item) => {
            const optionId = `radio-option-${item.value}`
            return (
                <RadioBtn
                    value={item.value}
                    label={item.label}
                    key={optionId}
                    id={optionId}
                    name={item.name}
                    onChange={onChange}
                    checked={item.value === currVal}
                />
            )
        })
    }
    return <div className="filter">{renderOptions()}</div>
}

export default RadioBtnGroup
