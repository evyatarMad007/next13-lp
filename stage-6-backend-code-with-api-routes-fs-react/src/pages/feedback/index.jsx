import React from 'react'
import { buildFeedbackPath, extractFeedback } from '../api/feedback'

const FeedbackPage = (props) => {
  const { feedbackItems } = props;
  return (
    <div>
    <h1>FeedbackPage</h1>
    <br /><br />
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

export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    return {
        props: {
            feedbackItems: data
        }
    }
}

export default FeedbackPage