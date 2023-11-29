import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'

const Snowperson = (props) => 
{
    const { char, pos, anim, snowman } = props
    const { animations } = useGLTF("./assets/models/snowperson.glb")
    const { actions } = useAnimations(animations, snowman)
    const model = useGLTF("./assets/models/snowperson.glb")
    const scene = useMemo(() =>
    {
        return SkeletonUtils.clone(model.scene)
    }, [])

    scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      })
    
    // useFrame(() =>
    // {
    //     if(snowperson.current)
    //     {
    //         // console.log(snowperson.current)
    //     }
    // })
    
    useEffect(() =>
    {
        actions[ anim ].play()
    })

    return(
        <>
            <primitive ref={ snowman } {...props} object={scene} />
        </>
    )
}

export default function NPCs(props)
{
    const { char } = props
    const SnowPerson1 = useRef()
    const SnowPerson2 = useRef()
    const SnowPerson3 = useRef()
    const SnowPerson4 = useRef()

    return(
        <>
            {/* Greeting things */}
            <Snowperson 
                position={ [ - 1.7, - 3, 6.9 ] } 
                pos={ [ - 1.7, - 3, 6.9 ] } 
                anim={ "Idle" } 
                scale={ 1 }
                rotation-y={ Math.PI * 1 }
                snowman={ SnowPerson1 }
                char={ char }
            />
            <Snowperson 
                position={ [ 5.2, - 3, 3.8 ] } 
                pos={ [ 5.2, - 3, 3.8 ] } 
                anim={ "Wave" } 
                scale={ 1 }
                rotation-y={ Math.PI * 1.2 }
                snowman={ SnowPerson2 }
                char={ char }
            />


            {/* Walking around */}
            <Snowperson 
                position={ [ - 8.9, - 4.6, - 27 ] } 
                pos={ [ - 8.9, - 3, - 27 ] } 
                anim={ "Cirlce" } 
                scale={ 1 }
                // rotation-y={ Math.PI * 1.2 }
                snowman={ SnowPerson3 }
                char={ char }
            />

            {/* On mountain */}
            <Snowperson 
                position={ [ 51, 21, - 37 ] } 
                pos={ [ 51, 21, - 37 ] } 
                anim={ "Cirlce" } 
                scale={ 0.9 }
                // rotation-y={ Math.PI * 1.2 }
                snowman={ SnowPerson4 }
                char={ char }
            />
        </>
    )
}

useGLTF.preload("./assets/models/snowperson.glb")