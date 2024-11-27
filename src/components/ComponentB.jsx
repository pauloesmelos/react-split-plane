import React from 'react';

const ComponentB = () => {
  return (
    <div className="p-4 bg-neutral-100 w-full flex flex-col gap-5">
        <div>
            <button className="px-6 py-2 bg-sky-500 text-white rounded-md font-medium
            hover:opacity-50 duration-150">
                Clique aqui
            </button>
        </div>
        <div className="p-7 w-[150px] border shadow-md hover:shadow-lg">
            <p className="font-bold text-emerald-500">
                Card/Container
            </p>
        </div>
    </div>
  )
}

export default ComponentB;