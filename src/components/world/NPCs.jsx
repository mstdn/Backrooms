import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import { Vector3 } from "three"
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'
import useSound from "use-sound"

const Monster = (props) => 
{
    const { char, pos, anim, monster, sound } = props
    const [ playSnowmanSound ] = useSound(sound, { volume: 1, interrupt: true })
    const [ talk, setTalk ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const { animations } = useGLTF("./assets/models/world/monster-2.glb")
    const { actions } = useAnimations(animations, monster)
    const model = useGLTF("./assets/models/world/monster-2.glb")
    const scene = useMemo(() =>
    {
        return SkeletonUtils.clone(model.scene)
    }, [])

    // scene.traverse((child) => {
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //     }
    // })

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))

            monster.current.visible = visible
            
            if(distance < 14 && !talk)
            {
                setVisible(true)
                actions[ anim ].play()
                playSnowmanSound()
                setTalk(true)

                // setTimeout(() =>
                // {
                //     char.current.setTranslation( { x: 0, y: 15, z: 0 } )
                //     char.current.setLinvel( { x: 0, y: 0, z: 0 } )
                //     char.current.setAngvel( { x: 0, y: 0, z: 0 } )
                // }, 2000)
            } 
            else if(distance > 14 && talk)
            {
                setVisible(false)
                setTalk(false)
            }
        }
    })

    return(
        <>
            <primitive ref={ monster } {...props} object={scene} />
        </>
    )
}


const Puppet = (props) => 
{
    const { char, pos, anim, monster, sound } = props
    const [ playSnowmanSound ] = useSound(sound, { volume: 1, interrupt: true })
    const [ talk, setTalk ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const { animations } = useGLTF("./assets/models/world/monster-4.glb")
    const { actions } = useAnimations(animations, monster)
    const model = useGLTF("./assets/models/world/monster-4.glb")
    const scene = useMemo(() =>
    {
        return SkeletonUtils.clone(model.scene)
    }, [])
    
    // scene.traverse((child) => {
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //     }
    // })

    useFrame(() =>
    {   
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            monster.current.visible = visible
            
            if(distance < 18 && !talk)
            {
                setVisible(true)
                actions[ anim ].play()
                playSnowmanSound()
                setTalk(true)

                // setTimeout(() =>
                // {
                //     char.current.setTranslation( { x: 0, y: 15, z: 0 } )
                //     char.current.setLinvel( { x: 0, y: 0, z: 0 } )
                //     char.current.setAngvel( { x: 0, y: 0, z: 0 } )
                // }, 2000)
            } 
            else if(distance > 18 && talk)
            {
                setVisible(false)
                setTalk(false)
            }
        }
    })

    return(
        <>
            <primitive ref={ monster } {...props} object={scene} />
        </>
    )
}

const Crawler = (props) => 
{
    const { char, pos, anim, monster, sound } = props
    const [ playSnowmanSound ] = useSound(sound, { volume: 5, interrupt: true })
    const [ talk, setTalk ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const { animations } = useGLTF("./assets/models/world/monster-3.glb")
    const { actions } = useAnimations(animations, monster)
    const model = useGLTF("./assets/models/world/monster-3.glb")
    const scene = useMemo(() =>
    {
        return SkeletonUtils.clone(model.scene)
    }, [])

    // scene.traverse((child) => 
    // {
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //     }
    // })

    useFrame(() =>
      {
          if(char.current)
          {
              const position = new Vector3(pos[0], pos[1], pos[2])
              const charPosition = char.current.translation()
              const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
              
              monster.current.visible = visible

              if(distance < 8 && !talk)
              {
                    setVisible(true)
                    actions[ anim ].play()
                    playSnowmanSound()
                    setTalk(true)
                    // setTimeout(() =>
                    // {
                    //     char.current.setTranslation( { x: 0, y: 15, z: 0 } )
                    //     char.current.setLinvel( { x: 0, y: 0, z: 0 } )
                    //     char.current.setAngvel( { x: 0, y: 0, z: 0 } )
                    // }, 2000)
              } 
              else if(distance > 8 && talk)
              {
                    setVisible(false)
                    setTalk(false)
                    actions[ anim ].fadeOut(20).stop()
                    actions["Idle"].fadeIn(1).play()
              }
          }
      })

    return(
        <>
            <primitive ref={ monster } {...props} object={scene} />
        </>
    )
}

export default function NPCs(props)
{
    const { char } = props

    const Monster1 = useRef()
    const Monster2 = useRef()
    const Monster3 = useRef()
    const Monster4 = useRef()


    return(
        <>
            <Monster 
                position={ [ 97, 10, - 93 ] } 
                pos={ [ 97, 10, - 93 ] } 
                anim={ "mixamo.com" } 
                scale={ 4 }
                rotation-y={ Math.PI * 0 }
                monster={ Monster1 }
                char={ char }
                sound={ './assets/audio/scream1.wav' }
            />

            <Monster 
                position={ [ - 45, 10, - 17 ] } 
                pos={ [ - 45, 10, - 17 ] } 
                anim={ "mixamo.com" } 
                scale={ 4 }
                rotation-y={ Math.PI * 1.5 }
                monster={ Monster2 }
                char={ char }
                sound={ './assets/audio/scream1.wav' }
            />

            <Crawler 
                position={ [ - 99, 10, - 49 ] } 
                pos={ [ - 97, 10, - 37 ] } 
                anim={ "Attack" } 
                scale={ 7 }
                rotation-y={ Math.PI * 0 }
                monster={ Monster3 }
                char={ char }
                sound={ './assets/audio/scream1.wav' }
            />

            <Puppet 
                position={ [ 48, 21, 86 ] } 
                pos={ [ 48, 21, 86 ] } 
                anim={ "the-game-masterAction" } 
                scale={ 3 }
                rotation-y={ Math.PI * 1 }
                monster={ Monster4 }
                char={ char }
                sound={ './assets/audio/doll.wav' }
            />
            
        </>
    )
}

useGLTF.preload("./assets/models/world/monster-2.glb")
useGLTF.preload("./assets/models/world/monster-3.glb")
useGLTF.preload("./assets/models/world/monster-4.glb")