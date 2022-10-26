/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import './App.css';


function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState();

  
  const fetchJoke = (e) => {
    if(loading) return;

    setLoading(true);

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
    
    if(showResponse === true) {
      setShowResponse(false);
    }  

  }

  return (
    <div className="relative overflow-hidden bg-white my-11 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Joke generator</span>
              </h1>
              { joke &&
                <>
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    {joke.setup}
                  </p>
                  {showResponse && 
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    {joke.punchline}
                  </p>
                  }
                </>
              } 
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={fetchJoke}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    {loading &&
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    }
                    Generate
                  </button>
                </div>
                {joke && !showResponse &&
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    onClick={() => {setShowResponse(!showResponse)}}
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'
                  >
                    Generate punchline
                  </a>
                </div>
                }
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1562124638-724e13052daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bGF1Z2hpbmd8fHx8fHwxNjY2Nzk1MzAx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
