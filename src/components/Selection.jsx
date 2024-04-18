/* eslint-disable react/prop-types */
import { useState } from 'react'

const Selection = ({options, selected, setSelected}) => {
    const [show, setShow] = useState(false);

  return (
    <div tabIndex={0} onBlur={() => setTimeout(() => setShow(false), 200)} onClick={() => setShow(!show)} className="w-full border rounded cursor-pointer flex justify-between items-center gap-4 py-1 px-2 ">
        <span>{selected || "--- Select option ---"}</span>
        <span className={`font-bold ${ show ? "-rotate-90" : "rotate-90"} transition-all`}>&gt;</span>

        {
            show ? (
                <ul className="w-full bg-white border absolute top-6 left-0 z-10">
                    {
                        options.map(op => (
                            <li key={op} onClick={() => setSelected(op)} className={`${selected === op ? "bg-primary text-white" : "hover:bg-sky-100"}  transition-all py-2 px-3`}>{op}</li>
                        ))
                    }
                </ul>
            ) : null
        }
    </div>
  )
}

export default Selection;