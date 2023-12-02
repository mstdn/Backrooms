import { 
    Bloom, 
    EffectComposer, 
    Vignette, 
    Glitch, 
    Scanline,
    BrightnessContrast
} from "@react-three/postprocessing"

export default function Effects()
{
    return(
        <>
            <EffectComposer
                disableNormalPass
            >
                <Bloom
                    intensity={ 1 }
                    mipmapBlur={ true }
                    luminanceThreshold={ 0.5 }
                />
                <Vignette
                    darkness={ 0.5 }
                />
                {/* <Glitch 
                    delay={ [ 1.5, 3.5 ] }
                    ratio={ 1 }
                /> */}
                {/* <Scanline 
                    density={ 1.25 }
                    opacity={ 0.2 }
                /> */}
                <BrightnessContrast
                    brightness={ - 0.05 } // brightness. min: -1, max: 1
                    contrast={ 0 } // contrast: min -1, max: 1
                />
            </EffectComposer>
        </>
    )
}