import React from 'react';

const ComponentC = () => {
  return (
    <div className="h-[500px] bg-emerald-100 w-[500px] flex flex-col gap-5">
        <div>
            <button className="px-6 py-2 bg-sky-500 text-white rounded-md font-medium
            hover:opacity-50 duration-150">
                Clique aqui
            </button>
        </div>
        <div className="p-7 w-[150px] border shadow-md hover:shadow-lg">
            <p className="font-bold text-sky-500">
                Card
            </p>
        </div>
    </div>
  )
}

export default ComponentC;