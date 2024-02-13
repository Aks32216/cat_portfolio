import React from 'react'

function Characteristics({feature,rating}) {
  return (
    <div>
        <dl>
            <dt className="text-md font-medium text-gray-900 dark:text-gray-400">{feature}</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-400 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div className="bg-blue h-2.5 rounded dark:bg-blue-500" style={{width: `${(rating/5)*100}%`}}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
            </dd>
        </dl>
    </div>
  )
}

export default Characteristics