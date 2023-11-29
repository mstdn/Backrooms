import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Girl(props) 
{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/player.glb")
  const { actions } = useAnimations(animations, group)

  return (
    <group scale={ 0.05 } ref={group} {...props} dispose={null}>
      <group name="AuxScene">
          <skinnedMesh
            castShadow
            receiveShadow
            name="Ch46"
            geometry={nodes.Ch46.geometry}
            material={materials.Ch46_body}
            skeleton={nodes.Ch46.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/player.glb");