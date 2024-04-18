/* eslint-disable react/prop-types */

const Modal = ({ show, message, handleProceed, handleCancel }) => {

  return (
    <div className={`w-full h-screen flex justify-center items-start md:items-center ${show ? "fixed" : "hidden"} top-0 left-0 z-20 bg-[rgba(0,0,0,0.5)]`}>
        <div className="w-full max-w-[300px] bg-white rounded p-6">
            <h1 className="font-bold mb-6">{message}</h1>

            <div className="flex justify-center items-center gap-4 flex-wrap">
                <button onClick={handleProceed} className="bg-blue-600 text-white rounded text-xs py-2 px-5">Yes</button>
                <button onClick={handleCancel} className="bg-red-600 text-white rounded text-xs py-2 px-5">No</button>
            </div>
        </div>
    </div>
  )
}

export default Modal