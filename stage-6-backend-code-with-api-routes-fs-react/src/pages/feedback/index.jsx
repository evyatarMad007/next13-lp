import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback/index";

const FeedbackPage = (props) => {
  const { feedbackItems } = props;
  const [selectedFeedback, setSelectedFeedback] = useState({});

  function loadFeedbackHandler(id) {
    fetch(`api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedFeedback(data.feedback));
  }

  return (
    <div>
      <h1>FeedbackPage</h1>
      <br />
      {selectedFeedback && (
        <div key={selectedFeedback.id}>
          <h2>Selected Feedback</h2>
          <p>{selectedFeedback.email}</p>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            <span>Email: {item.email}</span>
            <br />
            <span>Message: {item.text}</span>
            <br />
            {/* <button onClick={() => loadFeedbackHandler(item.id)}>Show Details</button> */}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
            <br />
            <br />
            <hr />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
