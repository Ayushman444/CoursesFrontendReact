import React from 'react'

export const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                
                <h1 className="text-red-500 text-4xl mb-4">Oops! Something went wrong.</h1>
                <p className="text-gray-700 mb-2">We're sorry, but the page you are looking for could not be found.</p>
                
            </div>
    </div>
  )
}
