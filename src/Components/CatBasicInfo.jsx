import React from 'react'

export default function CatBasicInfo({url,name,weight,lifespan,origin,wikipedia,vetstreet}) {
  return (
    <div className='flex justify-start'>
      <img className="w-3/5 max-h-60 mt-2 ml-2 h-2/4 border-2 rounded-md border-slate-800" src={url} alt="Sunset in the mountains" />
      <div className='flex flex-col mt-4 ml-4'>
        <div className="font-bold text-center text-xl mb-3">{name}</div>
        <div className="font-bold text-md mb-2">Life Span: {lifespan}</div>
        <div className="font-bold text-md mb-2">Weight: {weight} pounds</div>
        <div className="font-bold text-md mb-2">Origin: {origin}</div>
        <div className='pt-3 pl-1'>
            <span className="inline-block w-auto bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 mr-2"><a target='_blank'
            rel='noopener noreferrer' href={wikipedia}>Wikipedia</a></span>
            <span className="inline-block w-auto bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"><a target='_blank'
            rel='noopener noreferrer' href={vetstreet}>vetstreet</a></span>
        </div>
        

      </div>
    </div>
  )
}
