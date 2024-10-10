"use client";

import { getImagePath } from "@/src/utils";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImageUpload({image}: {image: string | undefined}) {
    const [imageUrl, setImageUrl] = useState('')
  return (
    <CldUploadWidget
        uploadPreset="quiosco-v1-ts"
        options={{
            maxFiles: 1,
        }}
        onSuccess={(result, {widget}) => {
            if(result.event = 'success') {
                widget.close()
                // @ts-expect-error: result.info might be undefined
                setImageUrl(result.info?.secure_url)
            }
        }}
    >
      {({open}) => (
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Product Image:</label>
            <div 
                onClick={() => open()}
            className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100">
                <TbPhotoPlus size={50} />
                <p className="text-lg font-semibold">Add image</p>

                {imageUrl && (
                    <div className="absolute inset-0 w-full h-full">
                        <Image fill
                            style={{objectFit: 'contain'}}
                            src={imageUrl}
                            alt="product image"
                        />
                    </div>
                )}
            </div>
          </div>

          {image && !imageUrl && (
            <div className="space-y-2">
              <label>Current image: </label>
              <div className="relative w-64 h-64">
                <Image 
                  fill
                  alt="product image"
                  src={getImagePath(image)}
                />
              </div>
            </div>
          )}

          <input 
            type="hidden"
            name="image"
            defaultValue={imageUrl ? imageUrl : image}
          />
        </>
      )}
    </CldUploadWidget>
  );
}
