import { Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Vector3 } from "three"
import useSound from "use-sound"

const GameText = (props) => 
{
    const { 
        text, 
        color, 
        size, 
        width, 
        position, 
        rotationY, 
        char, 
        sound, 
        pos, 
        repeat, 
        dis,
        lineHeight,
        letterSpacing,
        textAlign,
        hasAudio,
        font
    } = props
    const [ playSound ] = useSound(sound, { volume: 1, interrupt: true })
    const [ soundText, setSoundText ] = useState(false)

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(hasAudio && distance < dis && !soundText)
            {
                playSound()
                setSoundText(true)
            } 
            else if(hasAudio && distance > dis && soundText && repeat)
            {
                setSoundText(false)
            }
        }
    })

    return(
        <>
            <Text
                font={ font }
                fontSize={ size }
                maxWidth={ width }
                lineHeight={ lineHeight }
                letterSpacing={ letterSpacing }
                textAlign={ textAlign }
                color={ color }
                rotation-y={ rotationY }
                position={ position }
            >
                { text }
            </Text>
        </>
    )
}

export default function Texts(props)
{
    const { char } = props
    return(
        <>
            <GameText 
                text="Collect them coinz!"
                font="./assets/fonts/danger.otf"
                position={ [ 4, 20, 23.5 ] }
                pos={ [ 4, 20, 23.5 ] }
                rotationY={ Math.PI * 1 }
                color={ "#9c0909" }
                size={ 3 }
                width={ 4 }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                hasAudio={ true }
                sound={ './assets/audio/welcome.wav' }
                repeat={ false }
                dis={ 23 }
                char={ char }
            />
            <GameText 
                text="this way?"
                font="./assets/fonts/danger.otf"
                position={ [ 0, 20, 25.5 ] }
                pos={ [ 0, 20, 25.5 ] }
                rotationY={ Math.PI * 0 }
                color={ "#880808" }
                size={ 4 }
                width={ 20 }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                hasAudio={ false }
                sound={ '' }
                repeat={ false }
                dis={ 23 }
                char={ char }
            />
            <GameText 
                text="get the key"
                font="./assets/fonts/blood.ttf"
                position={ [ 65, 20, 87.5 ] }
                pos={ [ 65, 20, 87.5 ] }
                rotationY={ Math.PI * 1 }
                color={ "#630606" }
                size={ 2 }
                width={ 3 }
                lineHeight={ 2 }
                letterSpacing={ 0.05 }
                textAlign="center"
                hasAudio={ false }
                sound={ '' }
                repeat={ false }
                dis={ 23 }
                char={ char }
            />
            <GameText 
                text="help"
                font="./assets/fonts/blood.ttf"
                position={ [ - 60.4, 20, - 82 ] }
                pos={ [ - 60.4, 20, - 82 ] }
                rotationY={ Math.PI * 0.5 }
                color={ "#400606" }
                size={ 2.7 }
                width={ 4 }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                hasAudio={ true }
                sound={ './assets/audio/help.mp3' }
                repeat={ false }
                dis={ 20 }
                char={ char }
            />
            <GameText 
                text="hello?"
                font="./assets/fonts/blood.ttf"
                position={ [ 101.8, 23, 0.5 ] }
                pos={ [ 101.8, 20, 0.5 ] }
                rotationY={ Math.PI * 1.5 }
                color={ "#400606" }
                size={ 5 }
                width={ 4 }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                hasAudio={ true }
                sound={ './assets/audio/girl/hello.wav' }
                repeat={ true }
                dis={ 25 }
                char={ char }
            />
        </>
    )
}