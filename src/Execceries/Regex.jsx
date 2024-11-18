import React from 'react'

function Regex() {
  return (
    <>
    <div className="space-y-8">
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 rounded-lg"></div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Check The Regex
          </h3>
          <div className="display">
            <input
              className="text_inut_box"
              type="text"
              placeholder="Enter the String "
            />
            <button className="btn-1" type="button">Go </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Regex
