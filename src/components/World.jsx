import Platforms from "./world/Platforms"
import NPCs from "./world/NPCs"
import Collectables from "./Collectables"
import Texts from "./world/Texts"
// import { Ground } from "./Ground"
// import Environment from "./world/Environment"
// import Structures from "./world/Structures"
// import Trees from "./world/Trees"
// import Teleports from "./world/Teleports"

export default function World(props)
{
    const { char } = props

    return(
    <>
        <group>
            <Platforms />
            <Collectables char={ char } />
            <NPCs char={ char } />
            {/* <Teleports char={ char } /> */}
            {/* <Structures char={ char } /> */}
            <Texts char={ char } />
            {/* <Ground /> */}
            {/* <Environment /> */}
        </group>
    </>
    )
}