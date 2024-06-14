import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
<main>  
    <h1>
        CONTACT US
    </h1>
    <form>
        <div>
            <label>
                Name
            </label>
            <input type="text" required placeholder='ABS'></input>
        </div>
        <div>
            <label>
                Email
            </label>
            <input type="email" required placeholder='ABS@gmail.com'></input>
        </div>
        <div>
            <label>
                Message
            </label>
            <input type="text" required placeholder="Tell us about your query..."></input>
        </div>
        <button type="submit">Send</button>
        


    </form>
</main>

    </div>
  )
}

export default Contact