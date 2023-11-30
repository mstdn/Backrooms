import { forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Ecctrl from 'ecctrl'

const Player = forwardRef((props, ref) =>
{
    useFrame(() =>
    {
        if(ref.current)
        {
            const charPosition = ref.current.translation()
            // console.log(charPosition)
            
            if(charPosition.y < - 30 )
            {
                // console.log(charPosition.y)
                ref.current.setTranslation( { x: 0, y: 15, z: 0 } )
                ref.current.setLinvel( { x: 0, y: 0, z: 0 } )
                ref.current.setAngvel( { x: 0, y: 0, z: 0 } )

            }
        }
    })

    return( 
        <>
            <Ecctrl
                ref={ ref }
                capsuleRadius={ 0.3 }
                capsuleHalfHeight={ 0.5 }
                friction={ 1 }
                camInitDis={ - 1 }
                camMaxDis={ - 30 }
                camMinDis={ - 0.1 }
                // animated={ true }
                position={ [ 0, 20, 0 ] }
                camTargetPos={ { x: 0, y: 8, z: 0 } }
                maxVelLimit={ 8 }
                sprintMult={ 3 }
                jumpVel={ 6 }
                gravityScale={ 1 }
                autoBalanceDampingOnY={ 0.01 }
                // showSlopeRayOrigin={ true }
                // slopeRayDir={ { x: 0, y: - 0.5, z: 0 } }
                // debug={ false }
                // turnSpeed={ 10 }
                // jumpForceToGroundMult={ 10 }
                // characterInitDir={ 160 }
                // camInitDir={ Math.PI * 1 }
            >
            </Ecctrl>
        </>
    )
})

export default Player