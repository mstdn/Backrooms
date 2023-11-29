import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

/**
 * House 
 */
// const HouseX = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/house.glb")
//     return (
//         <RigidBody
//             type="fixed"
//             colliders="hull"
//         >
//             <group {...props} dispose={null}>
               
//             </group>
//         </RigidBody>
//     )
// }



/**
 * Backroom 
 */
const Backroom = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/backroom.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="trimesh"
        >
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={1.429}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_6.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_8.geometry}
                        material={materials.CarpetBaked}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_10.geometry}
                        material={materials.CeilingBaked}
                        position={[0, 1.921, 0.424]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials.Skirtings}
                        position={[-1.717, 0.031, 0.476]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_14.geometry}
                        material={materials.ColumnsBake}
                        position={[-0.724, 0.981, 0.302]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_16.geometry}
                        material={materials.Lights}
                        position={[-3.356, 1.92, -6.297]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_18.geometry}
                        material={materials.Lights}
                        position={[1.678, 1.92, -6.297]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_20.geometry}
                        material={materials.Lights}
                        position={[6.713, 1.92, -4.618]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_22.geometry}
                        material={materials.Lights}
                        position={[6.713, 1.92, 0.431]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_24.geometry}
                        material={materials.Lights}
                        position={[6.713, 1.92, 6.305]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_26.geometry}
                        material={materials.Lights}
                        position={[4.185, 1.92, 3.795]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_28.geometry}
                        material={materials.Lights}
                        position={[4.199, 1.92, -2.092]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_30.geometry}
                        material={materials.Lights}
                        position={[-1.668, 1.92, -2.954]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_32.geometry}
                        material={materials.Lights}
                        position={[-6.715, 1.92, -1.258]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_34.geometry}
                        material={materials.Lights}
                        position={[-5.881, 1.92, 1.244]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_36.geometry}
                        material={materials.Lights}
                        position={[-0.014, 1.92, 1.244]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_38.geometry}
                        material={materials.Lights}
                        position={[-5.881, 1.92, 2.955]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_40.geometry}
                        material={materials.Lights}
                        position={[-0.014, 1.92, 2.955]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_42.geometry}
                        material={materials.Lights}
                        position={[-5.881, 1.92, 6.291]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_44.geometry}
                        material={materials.Lights}
                        position={[-0.014, 1.92, 6.291]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_46.geometry}
                        material={materials.Lights}
                        position={[-0.63, 1.561, -0.959]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_48.geometry}
                        material={materials.WallBake}
                        position={[-0.867, 0.532, 0.06]}
                        rotation={[0, -Math.PI / 2, 0]}
                    />
                    </group>
                </group>
            </group>
        </RigidBody>
    )
}


/**
 *  https://poly.pizza/m/jLjH1jMIpH
 */
const StonePlatform = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/stone-platform.glb")
    return (
        <RigidBody
            type="fixed"
            colliders="hull"
        >
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.StonePlatform_Cylinder.geometry}
                    material={materials["Material.001"]}
                />
            </group>
        </RigidBody>
    )
}




export default function Platforms()
{
    return(
        <>  
            {/* Base platform */}
            <Backroom position={ [ 0, 10, 0 ] } scale={ 9 } rotation-y={ 0 } />
        </>
    )
}

useGLTF.preload("./assets/models/world/backroom.glb")
