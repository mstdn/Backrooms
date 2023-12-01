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
    const { nodes, materials } = useGLTF("./assets/models/key.glb")

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

            if(distance < 5 && !collected)
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
                {/* <group rotation={[-Math.PI / 2, 0, 0]} scale={100}> */}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Key.geometry}
                        material={materials.Yellow}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                {/* </group>     */}
            </group>
        </>
    )
}

export function totalCoinAmount()
{
    return totalCoinAmount = 2
}

export default function Collectables(props)
{
    const { char } = props

    const coin1  = useRef()
    const coin2  = useRef()

    return(
    <>
        <Coin
            coin={ coin1 } 
            position={ [ 93, 14, - 91 ] } 
            pos={ [ 93, 14, - 91 ] } 
            scale={ 4 } 
            char={ char } 
        />

        <Coin 
            coin={ coin2 } 
            position={ [ - 53, 14, - 15 ] } 
            pos={ [ - 53, 14, - 15 ] } 
            scale={ 4 } 
            char={ char } 
        />
    </>
    )
}



useGLTF.preload("./assets/models/key.glb")