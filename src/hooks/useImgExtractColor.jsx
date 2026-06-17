import { FastAverageColor } from "fast-average-color";
import { useState } from "react";
import { useEffect } from "react"

// @ts-ignore
export function useImgExtractColor({imgRef, src}) {
  const [bgColor, setBgColor] = useState('#e5e7eb')

   
   useEffect(() => {
      const fac = new FastAverageColor()
      const img = imgRef.current;      
      
      if (!img) return
      const handleLoad = async () => {
         try {
            const color = await fac.getColorAsync(img)
            
            setBgColor(color.hex)
         } catch (error) {
            console.error("no se pudo obtener el color", error)
         }
      }
      if (img.complete)
         handleLoad()
      else {
         console.log('aqui');
         
         img.addEventListener("load", handleLoad)
         return ()=> img.addEventListener("load", handleLoad)
}

   }, [src])
   return bgColor
}
