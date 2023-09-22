import React from 'react'

const Contactme = () => {
  return (
    <div>
      <h2>CONTACT ME</h2>
      <form action="" className='correction'>
        <div>
        <label for="name">Your name:</label>
        <input className="tab" type="text" id='name' />  
        </div><br />
        <div>
        <label for="email">Your email:</label>
        <input className="tab" type="email" id="email"/>
        </div><br />
        <label for="matn">Your massage:</label>
        <textarea name="massage" id="matn" cols="40" rows="10"></textarea><br />
        <div>
          <button type="reset">Clear</button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contactme