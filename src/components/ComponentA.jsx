import React from 'react';

const ComponentA = () => {
  return (
    <div className="h-[500px] bg-neutral-100 w-[500px] flex flex-col gap-5">
        <h1 className="font-bold text-2xl text-slate-800 text-center">
            Title Split Component Text
        </h1>
        <div className="text-left">
            <p className="text-neutral-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod exercitationem cupiditate temporibus dolor, modi quis alias facilis odit dicta, soluta quam tempora officiis accusantium eligendi reiciendis optio expedita quae accusamus?
            </p>
        </div>
    </div>
  )
}

export default ComponentA;