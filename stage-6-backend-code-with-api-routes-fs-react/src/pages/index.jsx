import React, {useRef} from 'react'

const HomePage = () => {

  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const reqBody = {
      email: enteredEmail,
      text: enteredMessage
    };


    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <br />
          <input type="email" id="email" ref={emailInputRef}/>
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <br />
          <textarea id="message" rows="5" ref={messageInputRef}></textarea>
        </div>

        <button>Send Feedback</button>
      </form>
    </div>
  )
}

export default HomePage