import { useRef } from "react";
import { useImgExtractColor } from "../../hooks/useImgExtractColor";

// @ts-ignore
function PostImageFrame({ src }) {
  const imgRef = useRef(null);
  const bgColor = useImgExtractColor({ imgRef, src });
  return (
    <div
      className=" flex justify-center items-center rounded-lg"
      style={{ background: bgColor }}
    >
      <img
        ref={imgRef}
           src={src}
           crossOrigin="anonymous"
        alt=""
        className="
           object-contain 
         max-h-125"
      />
     </div>
     
  );
}

export default PostImageFrame;
