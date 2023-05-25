import {Component} from 'react'
import TypingGame from '../TypingGame'
import './index.css'

const lessonList = [
    {
        id: 1,
        lesson: 'welcome',
        name: 'Welcome Lesson',
        typing: false,
        durationMinutes: 1,
        description: ["First, let's get your fingers more accustomed to moving using the touch typing style. The two first Warm Up Drills are designed to do that.",  "Next, we'll introduce the Home Keys and focus on drilling them to muscle memory.", "And finally, you'll type longer text using only the Home Keys."],
        typingKeys: []
    },
    {
        id: 2,
        lesson: 'warm-up-1',
        name: 'Warm-UP 1',
        typing: true,
        durationMinutes: 2,
        description: [],
        typingKeys: ["a", "s", "d", "f", "j", "k", "l", ";"]
    },
    {
        id: 3,
        lesson: 'warm-up-2',
        name: 'Warm-Up 2',
        typing: true,
        durationMinutes: 2,
        description: [],
        typingKeys: ["a", "s", "d", "f", "j", "k", "l", ";"]
    },
    {
        id: 4,
        lesson: 'focus',
        name: 'Focus on the Home Keys',
        typing: false,
        durationMinutes: 1,
        description: ["The remainder of this lesson will focus on using the Home Row keys.", "You will begin by typing key sequences and then move on to typing full words and some short text.", "As you complete each exercise you will get better at typing without looking at your keyboard!"],
        typingKeys: []
    },
    {
        id: 5,
        lesson: 'key-drill',
        name: 'Key Drill with Home Keys',
        typing: true,
        durationMinutes: 3,
        description: [],
        typingKeys: ["asdf", "jkl;", "adsf", "jlk;", "afsd", "j;kl", "sdaf", "klj;", "sfad", "k;jl", "fdsa", ";lkj"]
    },
    {
        id: 6,
        lesson: 'word-drill',
        name: 'Word Drill with Home Keys',
        typing: true,
        durationMinutes: 3,
        description: [],
        typingKeys: ["sad;", "ask;", "lad;", "all;", "salad;", "fall;", "ladle;", "ad;", "add;", "flask;", "fad;", "dad;", "add;", "fad;", "fall;", "lad;", "jad;", "lass;", "fjall;", "daff;", "lass;", "jaffa;", "alfalfa;", "ska;", "flask;"]
    },
    {
        id: 7,
        lesson: 'skill-test',
        name: 'Skill Test',
        typing: true,
        durationMinutes: 5,
        description: [],
        typingKeys: ["Dad asked Jack to fall;", "All fads last;", "Jack fell as sad lad all jazzy;", "A flask is a jazz desk;", "Fad; jazz; fall; ask; all sad;", "Salad adds a dash of flavor;", "Jack's ladle is all jazzed up;", "Jazz skalds ask fad-filled lads;", "Dad, fall! Sad lad all jazzed;", "Fjord; ladle; jazz; ask; sad;"]
    }
]

export default class Lesson extends Component {
    state = {
        lessonTitle: "",
        typing: false,
        durationMinutes: 5,
        description: "",
        typingKeys: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        const {match} = this.props
        const {params} = match
        const {lesson} = params
        const data = lessonList.filter(item => item.lesson === lesson)
        this.setState({
            lessonTitle: data[0].name,
            typing: data[0].typing,
            durationMinutes: data[0].durationMinutes,
            description: data[0].description,
            typingKeys: data[0].typingKeys
        })
    }

    render() {
        const {lessonTitle, typing, durationMinutes, description, typingKeys} = this.state
        return (
            <div className='container'>
                <p className='inst'>{lessonTitle}</p>
                <div className='lesson-container'>
                    {description.length !== 0 &&
                        <ul className='description'>
                            {description.map(item => <li className='order-list'>{item}</li>)}
                        </ul>
                    }
                    {typing && <TypingGame durationMinutes={durationMinutes} typingKeys={typingKeys.map(item => item.toLowerCase())} />}
                </div>
                <a href="/typing-test">
                    <button className='button'>Back</button>
                </a>
            </div>
        )
    }
}