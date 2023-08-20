import React, { useState, useEffect } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');
  const [latestSubmission, setLatestSubmission] = useState(null);



  // fetch latest submission
  useEffect(() => {
    async function fetchLatestSubmission() {
      try {
        const response = await fetch('/api/getSubmit');
        if (response.ok) {
          const data = await response.json();
          setLatestSubmission(data);
        }
      } catch (error) {
        console.error('Error fetching latest submission:', error);
      }
    }

    fetchLatestSubmission();
  }, []);



  // submit name and message
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous confirmation message
    setConfirmation('');

    if (!name || !message) {
      setError('Please fill in all required fields')
      return;
    }


    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      if (response.ok) {
        const data = await response.json();
        setConfirmation(`Thank you, ${data.name}! 
                Your message: ${data.message}`);
        setError('');


      } else {
        setError('Failed to submit the form. Please try again.');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return (

    <div className="relative min-h-screen">

      {/* // vertical lines background */}
      <div className="absolute inset-0 grid grid-cols-7 gap-x-2vw pointer-events-none">
        <div className="col-span-1 h-full w-[0.8px] bg-gray-500"></div>
        <div className="col-span-1 h-full w-[0.8px] bg-gray-500"></div>
        <div className="col-span-1 h-full w-[0.8px] bg-gray-500"></div>
        <div className="col-span-1 h-full w-[0.8px] bg-gray-500"></div>
        <div className="col-span-1 h-full w-[0.8px] bg-gray-500"></div>
        <div className="col-span-1 h-full w-[0.8px] bg-gray-500"></div>
        <div className="col-span-1 h-full w-[0.8px] bg-gray-500"></div>
      </div>


      {/* // form field section */}
      <div className=' bg-zinc-200 h-screen flex flex-col w-screen pt-2 items-center '>
        <form className='mx-10 w-11/12 lg:w-3/6 md:w-4/6 relative z-10' onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center  pt-4 '>
            <p className='font-semibold text-xl pb-4'>Form Submission</p>
            <label htmlFor='name' className='font-bold mb-2 '>
              Name:
            </label>

            <input
              type='text'
              id='name'
              className='w-full p-5 border rounded-2xl border-gray-900  border-r-4 border-b-4 outline-none'
              placeholder='Type your name...'
              value={name}
              onChange={(e) => setName(e.target.value)}

            />


          </div>

          <div className='flex flex-col justify-center  pt-4 mb-4 '>
            <label htmlFor='name' className='font-bold mb-2 '>
              Message:
            </label>

            <textarea
              type='text'
              id='message'
              className='w-full h-60 p-5 border rounded-2xl border-gray-900  border-r-4 border-b-4 outline-none '
              placeholder='Type your message...'

              value={message}
              onChange={(e) => setMessage(e.target.value)}

            />


          </div>

          <button className='bg-zinc-200 text-black py-6 px-20 text-lg rounded-2xl border border-black  border-r-8 border-b-8 hover:bg-zinc-100 hover:-translate-x-0.5'
            type='submit'>
            Submit
          </button>


        </form>

        {/* // confirmation message  here */}



        {confirmation && <p className='bg-gray-200 mx-10 mt-4 w-11/12 lg:w-3/6 md:w-4/6 border border-gray-300 rounded-md  shadow-gray-700 shadow-lg relative z-10 p-4 whitespace-pre-line'>{confirmation}</p>}

        {error && <p className='bg-gray-200 mx-10 mt-4 w-11/12 lg:w-3/6 md:w-4/6 border border-gray-300 rounded-md  shadow-gray-700 shadow-lg relative z-10 p-4 whitespace-pre-line text-red-500'>{error}</p>}


      </div>


    </div>
  )
}

export default Home;