import React from 'react'

const Contact = () => {
  return (
    <div className='content'>
    <div className='container'>
      <div className='authform'>
      <h1>Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
        />
        <textarea
          type="text"
          placeholder="Message"
        />
        <button>
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Contact