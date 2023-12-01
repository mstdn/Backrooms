import { Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Vector3 } from "three"
import useSound from "use-sound"

const GameText = (props) => 
{
    const { text, color, size, width, position, rotationY, char, sound, pos } = props
    const [ playSound ] = useSound(sound, { volume: 1, interrupt: true })
    const [ soundText, setSoundText ] = useState(false)

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            console.log(distance)

            if(distance < 21 && !soundText)
            {
                playSound()
                setSoundText(true)
            } 
            // else if(distance > 21 && soundText)
            // {
            //     setSoundText(false)
            // }
        }
    })

    return(
        <>
            <Text
                font="./assets/fonts/danger.otf"
                fontSize={ size }
                maxWidth={ width }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                color={ color }
                rotation-y={ rotationY }
                position={ position}
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
                position={ [ 4, 20, 23.5 ] }
                pos={ [ 4, 20, 23.5 ] }
                rotationY={ Math.PI * 1 }
                color={ "#9c0909" }
                size={ 3 }
                width={ 4 }
                sound={ './assets/audio/welcome.wav' }
                char={ char }
            />

            {/* <GameText 
                text="To the bar!" 
                position={ [ 47.85, 3.5, 0 ] }
                rotationY={ Math.PI * 1.5 }
                color={ "white" }
                size={ 0.8 }
                width={ 6 }
            />

            <GameText 
                text="Shuttle Bay" 
                position={ [ 141, 3.5, 151 ] }
                rotationY={ Math.PI * 1 }
                color={ "white" }
                size={ 0.8 }
                width={ 6 }
            /> */}
        </>
    )
}