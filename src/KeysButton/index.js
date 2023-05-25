import './index.css'

const firstLineKeysList = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"]
const secondLineKeysList = ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"]
const thirdLineKeysList = ["caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"]
const fourthLineKeysList = ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift"]
const autoWidthButtonList = ["`", "backspace", "tab", "caps lock", "enter", "shift"]
const orangeBg = ["q", "a", "z", "1"]
const yellowBg = ["w", "s", "x", "2"]
const greenBg = ["e", "d", "c", "3"]
const skyBlueBg = ["r", "f", "v", "t", "g", "b", "4", "5"]
const lightBlueBg = ["y", "h", "n", "u", "j", "m", "6", "7"]
const blueBg = ["i", "k", ",", "8"]
const pinkBg = ["o", "l", ".", "9"]
const redBg = ["p", ";", "/", "[", "'", "]", "\\", "0", "-", "="]

const KeysButton = props => {
    const {keyActive} = props
    return (
        <div className="keys-button-container">
            <div className='keys-button-line'>
                {firstLineKeysList.map((keys, index) => 
                    <div key={index} style={{fontSize: keys === keyActive ? 32 : 13, color: keys === keyActive ? "black" : "white"}} className={`key-button ${autoWidthButtonList.includes(keys) ? "extra-width" : " "} ${orangeBg.includes(keys) ? "orange" : " "} ${yellowBg.includes(keys) ? "yellow" : " "} ${blueBg.includes(keys) ? "blue" : " "} ${skyBlueBg.includes(keys) ? "sky-blue" : " "} ${lightBlueBg.includes(keys) ? "light-blue" : " "} ${greenBg.includes(keys) ? "green" : " "} ${pinkBg.includes(keys) ? "pink" : " "} ${redBg.includes(keys) ? "red" : " "}`}>{keys}</div>
                )}
            </div>
            <div className='keys-button-line'>
                {secondLineKeysList.map((keys, index) => 
                    <div key={index} style={{fontSize: keys === keyActive ? 32 : 13, color: keys === keyActive ? "black" : "white"}} className={`key-button ${autoWidthButtonList.includes(keys) ? "extra-width" : " "} ${keys === "\\" ? "small-extra-width" : " "} ${orangeBg.includes(keys) ? "orange" : " "} ${yellowBg.includes(keys) ? "yellow" : " "} ${blueBg.includes(keys) ? "blue" : " "} ${skyBlueBg.includes(keys) ? "sky-blue" : " "} ${lightBlueBg.includes(keys) ? "light-blue" : " "} ${greenBg.includes(keys) ? "green" : " "} ${pinkBg.includes(keys) ? "pink" : " "} ${redBg.includes(keys) ? "red" : " "}`}>{keys}</div>
                )}
            </div>
            <div className='keys-button-line'>
                {thirdLineKeysList.map((keys, index) => 
                    <div key={index} style={{fontSize: keys === keyActive ? 32 : 13, color: keys === keyActive ? "black" : "white"}} className={`key-button ${autoWidthButtonList.includes(keys) ? "extra-width" : " "} ${orangeBg.includes(keys) ? "orange" : " "} ${yellowBg.includes(keys) ? "yellow" : " "} ${blueBg.includes(keys) ? "blue" : " "} ${skyBlueBg.includes(keys) ? "sky-blue" : " "} ${lightBlueBg.includes(keys) ? "light-blue" : " "} ${greenBg.includes(keys) ? "green" : " "} ${pinkBg.includes(keys) ? "pink" : " "} ${redBg.includes(keys) ? "red" : " "}`}>{keys}</div>
                )}
            </div>
            <div className='keys-button-line'>
                {fourthLineKeysList.map((keys, index) => 
                    <div key={index} style={{fontSize: keys === keyActive ? 32 : 13, color: keys === keyActive ? "black" : "white"}} className={`key-button ${autoWidthButtonList.includes(keys) ? "extra-width" : " "} ${orangeBg.includes(keys) ? "orange" : " "} ${yellowBg.includes(keys) ? "yellow" : " "} ${blueBg.includes(keys) ? "blue" : " "} ${skyBlueBg.includes(keys) ? "sky-blue" : " "} ${lightBlueBg.includes(keys) ? "light-blue" : " "} ${greenBg.includes(keys) ? "green" : " "} ${pinkBg.includes(keys) ? "pink" : " "} ${redBg.includes(keys) ? "red" : " "}`}>{keys}</div>
                )}
            </div>
        </div>
    )
}

export default KeysButton