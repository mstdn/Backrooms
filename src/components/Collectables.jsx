import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import useGame from '../stores/useGame.jsx'
import { Vector3 } from "three"
import useSound from "use-sound"

const Coin = (props) => 
{
    const [ playCoinSound ] = useSound('./assets/audio/coin.wav')
    const { coin } = props
    const [ collected, setCollected ] = useState(false)
    const coins = useGame()
    
    const { char, pos } = props
    const { nodes, materials } = useGLTF("./assets/models/coin.glb")

    useFrame((_, delta) =>
    {
        // Item rotate
        coin.current.rotation.y += delta

        if(char.current)
        {
            const coinPosition = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = coinPosition.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            // console.log( distance)

            if(distance < 3 && !collected)
            {
                coins.increaseCoins()
                playCoinSound()
                setCollected(true)
                // console.log(coins.coins)
                coin.current.visible = false
            }
        }
    })

    return(
        <>
            <group ref={coin} {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_1.geometry}
                    material={materials.Yellow}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Coin_2.geometry}
                    material={materials.DarkYellow}
                    />
                </group>
            </group>
        </>
    )
}

export function totalCoinAmount()
{
    return totalCoinAmount = 8
}

export default function Collectables(props)
{
    const { char } = props
    const coin1  = useRef()
    const coin2  = useRef()
    const coin3  = useRef()
    const coin4  = useRef()
    const coin5  = useRef()
    const coin6  = useRef()
    const coin7  = useRef()
    const coin8  = useRef()

    return(
    <>
        <Coin position={ [ 44, 9, - 13 ] } pos={ [ 44, 9, - 13 ] } scale={ 2 } char={ char } coin={ coin1 } />
        <Coin position={ [ 63, 17, - 11 ] } pos={ [ 63, 17, - 11 ] } scale={ 2 } char={ char } coin={ coin2 } />
        <Coin position={ [ 58, 30, 26 ] } pos={ [ 58, 30, 26 ] } scale={ 2 } char={ char } coin={ coin3 } />
        <Coin position={ [ 46, 40, 59 ] } pos={ [ 46, 40, 59 ] } scale={ 2 } char={ char } coin={ coin4 } />
        <Coin position={ [ - 10, 49, 65 ] } pos={ [ - 10, 49, 65 ] } scale={ 2 } char={ char } coin={ coin5 } />
        <Coin position={ [ - 61, 2, 21 ] } pos={ [ - 61, 2, 21 ] } scale={ 2 } char={ char } coin={ coin7 } />
        <Coin position={ [ - 46, - 6, - 77 ] } pos={ [ - 46, - 6, - 77 ] } scale={ 2.5 } char={ char } coin={ coin6 } />
        <Coin position={ [ 53, 21, - 37 ] } pos={ [ 53, 21, - 37 ] } scale={ 2 } char={ char } coin={ coin8 } />
    </>
    )
}



useGLTF.preload("./assets/models/coin.glb")