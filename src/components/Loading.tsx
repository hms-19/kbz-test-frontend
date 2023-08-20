import React from 'react'
import '../styles/loading.css'
const Loading : React.FC<{}> = () => {
  return (
    <section id='loading'>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Loading
