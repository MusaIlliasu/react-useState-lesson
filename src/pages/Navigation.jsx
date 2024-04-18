/* eslint-disable react/prop-types */

const Navigation = ({ setShowAddUser }) => {
  return (
    <nav className="w-full h-[60px] border-b flex justify-center items-center">
        <div className="container">
            <div className="flex justify-between items-center gap-4">
                <div>
                    <span className="inline-block w-[35px] h-[35px] rounded-full bg-primary"></span>
                </div>

                <div>
                    <button onClick={() => setShowAddUser()} className="bg-primary py-1 px-4 text-xs text-white rounded">Add User</button>
                    {/* <span className="font-bold text-sm">John Doe</span> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navigation