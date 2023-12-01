import { Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Lights(props)
{
    const { char, downgradedPerformance } = props
    const light = useRef()

    useFrame(() =>
    {
        if(char.current)
        {
            // Make lights follow the player
            const charPosition = char.current.translation()

            light.current.position.z = charPosition.z + 1 - 4
            light.current.target.position.z = charPosition.z - 4
            
            light.current.position.x = charPosition.x + 1 - 4
            light.current.target.position.x = charPosition.x - 4
            
            light.current.position.y = charPosition.y + 10
            light.current.target.position.y = charPosition.y
            
            light.current.target.updateMatrixWorld()

            // pointRef.current.position.z = charPosition.z + 2
            // pointRef.current.position.x = charPosition.x + 2
            // pointRef.current.position.y = charPosition.y + 2

            // pointRef.current.updateMatrixWorld()
            
            // console.log(pointRef.current.position)
        }
    })

    return <>
        
        <Environment
            preset='night' 
            // files="./assets/images/map.hdr"
            // files="./assets/images/sunset.hdr"
        />
        <ambientLight 
            intensity={ 0.01 } 
        />
        <directionalLight
            ref={ light }
            castShadow={ !downgradedPerformance }
            // color={ 'blue' }
            position={ [ 1, 8, 1 ] }
            intensity={ 0.3 }
            shadow-camera-near={ 0.1 }
            shadow-camera-far={ 100 }
            shadow-camera-top={ 50 }
            shadow-camera-right={ 50 }
            shadow-camera-bottom={ - 50 }
            shadow-camera-left={ - 50 }
            shadow-bias={ - 0.001 }
            shadow-mapSize-width={ 1024 }
            shadow-mapSize-height={ 1024 }
            // shadow-mapSize={ [ 1024, 1024 ] }
        />
    </>
}