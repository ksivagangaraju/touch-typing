import './index.css'

const TouchTyping = () => {
    return (
        <div className='app'>
            <h1 className="heading">Typing Test</h1>
            <div className='container'>
                <p className='inst'>Instruction</p>
                <img className='img' src="https://res.cloudinary.com/dpmyvq5te/image/upload/v1684852669/Finger_position_on_a_keyboard_vftzee.png" alt="typing instruction" />
                <a href="/typing-test">
                    <button className='button' type="button">START</button>
                </a>
            </div>
        </div>
    )
}

export default TouchTyping