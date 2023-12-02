import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import { Vector3 } from "three"
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'
import useSound from "use-sound"

const Monster = (props) => 
{
    const { char, pos, anim, monster, sound, dis } = props
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
            
            if(distance < dis && !talk)
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
            else if(distance > dis && talk)
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
    const { char, pos, anim, monster, sound, dis, vol } = props
    const [ playSnowmanSound ] = useSound(sound, { volume: vol, interrupt: true })
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
            
            if(distance < dis && !talk)
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
            else if(distance > dis && talk)
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
    const { char, pos, anim, monster, sound, dis } = props
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

              if(distance < dis && !talk)
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
              else if(distance > dis && talk)
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

const Baloon = (props) => 
{
    const { char, pos, anim, monster, sound, dis, vol } = props
    const [ playSnowmanSound ] = useSound(sound, { volume: vol, interrupt: true })
    const [ talk, setTalk ] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const { animations } = useGLTF("./assets/models/world/monster-5.glb")
    const { actions } = useAnimations(animations, monster)
    const model = useGLTF("./assets/models/world/monster-5.glb")
    const scene = useMemo(() =>
    {
        return SkeletonUtils.clone(model.scene)
    }, [])

    // console.log(actions)

    useFrame(() =>
    {   
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            monster.current.visible = visible
            
            if(distance < dis && !talk)
            {
                setVisible(true)
                actions[ anim ].play()
                playSnowmanSound()
                setTalk(true)
            } 
            else if(distance > dis && talk)
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

export default function NPCs(props)
{
    const { char } = props

    const Monster1 = useRef()
    const Monster2 = useRef()
    const Monster3 = useRef()
    const Monster4 = useRef()
    const Monster5 = useRef()
    const Monster6 = useRef()
    const Monster7 = useRef()
    const Monster8 = useRef()
    const Monster9 = useRef()
    const Monster10 = useRef()
    const Monster11 = useRef()
    const Monster12 = useRef()

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
                dis={ 14 }
                vol={ 1 }
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
                dis={ 14 }
                vol={ 1 }
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
                dis={ 8 }
                vol={ 1 }
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
                dis={ 18 }
                vol={ 1.5 }
            />
            <Puppet 
                position={ [ - 103, 21, 50 ] } 
                pos={ [  - 100, 21, 50 ] } 
                anim={ "the-game-masterAction" } 
                scale={ 3 }
                rotation-y={ Math.PI * 0.85 }
                monster={ Monster5 }
                char={ char }
                sound={ './assets/audio/doll.wav' }
                dis={ 25 }
                vol={ 1 }
            />
            <Baloon 
                position={ [ 54, 18, - 55 ] } 
                pos={ [ 54, 18, - 55 ] } 
                anim={ "idle" } 
                scale={ 5 }
                rotation-y={ - Math.PI * 0.25 }
                monster={ Monster6 }
                char={ char }
                sound={ './assets/audio/girl/behind-you-whisper.wav' }
                dis={ 20 }
                vol={ 1 }
            />
            <Baloon 
                position={ [ 22.5, 18, 30 ] } 
                pos={ [ 22.5, 18, 30 ] } 
                anim={ "idle" } 
                scale={ 5 }
                rotation-y={ - Math.PI * 0.25 }
                monster={ Monster7 }
                char={ char }
                sound={ './assets/audio/girl/hello.wav' }
                dis={ 14 }
                vol={ 1 }
            />
            <Crawler 
                position={ [ - 90, 11, 103 ] } 
                pos={ [ - 90, 11, 103 ] } 
                anim={ "Attack" } 
                scale={ 4 }
                rotation-y={ Math.PI * 0.5 }
                monster={ Monster8 }
                char={ char }
                sound={ './assets/audio/scream1.wav' }
                dis={ 8 }
                vol={ 1 }
            />
            <Baloon 
                position={ [ - 65, 14, - 25 ] } 
                pos={ [ - 65, 14, - 25 ] } 
                anim={ "idle" } 
                scale={ 3 }
                rotation-y={ - Math.PI * 1 }
                monster={ Monster9 }
                char={ char }
                sound={ './assets/audio/girl/hum.wav' }
                dis={ 14 }
                vol={ 1 }
            />
            <Baloon 
                position={ [ 99, 14, 103 ] } 
                pos={ [ 99, 14, 103 ] } 
                anim={ "idle" } 
                scale={ 3 }
                rotation-y={ - Math.PI * 0.75 }
                monster={ Monster10 }
                char={ char }
                sound={ './assets/audio/girl/spidey.wav' }
                dis={ 27 }
                vol={ 1 }
            />
            <Baloon 
                position={ [ 16, 14, 90 ] } 
                pos={ [ 16, 14, 90 ] } 
                anim={ "idle" } 
                scale={ 3 }
                rotation-y={ - Math.PI * 1.75 }
                monster={ Monster11 }
                char={ char }
                sound={ './assets/audio/girl/can-you-find-me.wav' }
                dis={ 20 }
                vol={ 1 }
            />
            <Puppet 
                position={ [ 0, 26, - 81 ] } 
                pos={ [  0, 21, - 79 ] } 
                anim={ "the-game-masterAction" } 
                scale={ 3 }
                rotation-y={ Math.PI * 0.5 }
                monster={ Monster12 }
                char={ char }
                sound={ './assets/audio/doll.wav' }
                dis={ 25 }
                vol={ 1 }
            />
        </>
    )
}

useGLTF.preload("./assets/models/world/monster-2.glb")
useGLTF.preload("./assets/models/world/monster-3.glb")
useGLTF.preload("./assets/models/world/monster-4.glb")
useGLTF.preload("./assets/models/world/monster-5.glb")