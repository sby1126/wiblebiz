'use client'

import { listQueryState } from '@/recoil/atoms'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { SearchInfo } from '../SearchInfo'

export function QuerystionForm() {
    const [listQuery, setlistQuery] = useRecoilState(listQueryState)
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        if (listQuery.question.length == 0) {
            setInputText('')
        }
    }, [listQuery.question])

    function makeQuestion() {
        setlistQuery({ ...listQuery, question: inputText, offset: 0 })
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            makeQuestion()
        }
    }

    return (
        <>
            <div className="search">
                <div className="input-wrap">
                    <input
                        type="text"
                        placeholder="찾으시는 내용을 입력해 주세요"
                        value={inputText}
                        onChange={(e) => {
                            setInputText(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            handleKeyDown(e)
                        }}
                    />
                    {inputText.length > 0 && (
                        <button
                            type="button"
                            className="clear"
                            data-ui-click="input-clear"
                            onClick={() => {
                                setInputText('')
                            }}
                        >
                            다시입력
                        </button>
                    )}
                    <button
                        type="button"
                        className="submit"
                        onClick={() => makeQuestion()}
                    >
                        검색
                    </button>
                </div>
            </div>
            {listQuery.question.length > 0 && <SearchInfo />}
        </>
    )
}
