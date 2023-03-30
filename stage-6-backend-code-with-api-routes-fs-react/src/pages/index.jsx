import React, {useRef, useState} from 'react'

const HomePage = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
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

  function loadFeedbackHandler() {
    fetch('/api/feedback')
    .then((res) => res.json())
    .then((data) => setFeedbackItems(data.feedback))
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
      <br /><br />
      <hr />
      <br /><br />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <br />
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            <span>Email: {item.email}</span>
            <br />
            <span>Message: {item.text}</span>
            <br /><br />
            <hr />
            <br /><br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage