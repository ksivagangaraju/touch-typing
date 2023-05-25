import { useState, useEffect } from 'react'
import KeysButton from '../KeysButton'
import './index.css'

const TypingGame = props => {
    const {durationMinutes, typingKeys} = props
    const [countTime, setCountTime] = useState(durationMinutes * 60)
    const [typingText, setTypingText] = useState("")
    const [keysIndex, setKeysIndex] = useState(0)
    const [countIndex, setCountIndex] = useState(0)
    const [timeUp, setTimeUp] = useState(false)
    const [totalKeys, setTotalKeys] = useState(0)
    const [correctKeys, setCorrectKeys] = useState(0)
    useEffect(() => {
        const tickingTime = setInterval(() => {
            if (countTime === 0) {
                clearInterval(tickingTime)
                setTimeUp(true)
            } else {
                setCountTime(prev => prev - 1)
            }
        }, 1000)
        return () => clearInterval(tickingTime)
    }, [countTime, durationMinutes])
    const getNext = e => {
        if (e.key === "Enter") {
            setTypingText("")
            setKeysIndex(prev => typingKeys.length - 1 === prev ? 0 : prev + 1)
            setCountIndex(0)
            setTotalKeys(prev => prev + 1)
            setCorrectKeys(prev => typingKeys[keysIndex] === typingText ? prev + 1 : prev)
        }
        console.log(e.key)
        setCountIndex(prev => "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./ ".includes(e.key) ? prev + 1 : prev)
        setCountIndex(prev => e.key === "Backspace" ? prev === 0 ? prev : prev - 1 : prev)
        console.log(countIndex)
    }
    const indexKeyCheck = (index) => {
        if (typingKeys[keysIndex][index] === typingText[index]) {
            return "correct-key"
        }
        return `yet-key`
    }
    const onChangeKeys = e => {
        const value = e.target.value
        setTypingText(value)
    }
    return(
        <div className="typing-game-container">
            {!timeUp && <>
                <span className="ticking-time">{`${Math.floor(countTime / 60) <= 9 ? `0${Math.floor(countTime / 60)}` : Math.floor(countTime / 60)}:${countTime % 60 <= 9 ? `0${countTime % 60}` : countTime % 60}`}</span>
                <p className='keys'>{typingKeys[keysIndex].split("").map((key, index) => <span key={index} className={indexKeyCheck(index)}>{key}</span>)}</p>
                <span>Key Press 'Enter' = Next Word</span>
                <input className='input-text-area' type='text' value={typingText} onChange={onChangeKeys} onKeyDown={getNext}/>
                <KeysButton keyActive={typingKeys[keysIndex][countIndex]} />
            </>}
            {timeUp && <>
                <p className='keys'>Your Accuracy Result:{" "}<span className='correct-key'>{`${totalKeys !== 0 ? Math.floor((correctKeys / totalKeys) * 100) : 0}%`}</span></p>
            </>}
        </div>
    )
}

export default TypingGame