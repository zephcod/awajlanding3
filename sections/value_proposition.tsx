import React from 'react'
import Image from "next/image";
import Content from "../public/character/contact.png";

const ValueProp = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-4xl mx-auto my-10 gap-6 items-center'>
        <div className='flex-1'>
          <Image src={Content} width={500} height={300} style={{objectFit:'cover'}}  alt='Content Marketing Awaj Ad'/>
        </div>
        <div className="relative flex flex-col p-4 gap-3 max-w-4xl mx-auto flex-1">
            <div className="relative">
              <h3 className="p-1 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pb-2 text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="relative">
              <h3 className="p-1 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pb-2 text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="relative">
              <h3 className="p-1 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pb-2 text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="relative">
              <h3 className="p-1 font-semibold text-lg">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pb-2 text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
          </div>
    </div>
  )
}

export default ValueProp