import React from 'react'
import Image from "next/image";
import Content from "../public/character/contact.png";

const ValueProp = () => {
  return (
    <div className='flex flex-row max-w-5xl m-auto gap-6 items-center'>
    <div className='flex-1'>
    <Image src={Content} width={500} height={300} style={{objectFit:'cover'}}  alt='Content Marketing Awaj Ad'/>
    </div>
    <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3 flex-1">
        <div className="ktq4">
          <h3 className="pt-3 font-semibold text-lg">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="ktq4">
          <h3 className="pt-3 font-semibold text-lg">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="ktq4">
          <h3 className="pt-3 font-semibold text-lg">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="ktq4">
          <h3 className="pt-3 font-semibold text-lg">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="pt-2 value-text text-md fkrr1">
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