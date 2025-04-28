import classes from "./FeedbackMain.module.css"


import React from 'react'

const FeedbackMain = () => {
  return (
    <div className={classes.main_area}>
      <h2 className="">All Feedbacks</h2>


      <div className={classes.feesbacks_box_wrapper}>
        <div className={classes.feedback_box}></div>
      </div>
    </div>
  )
}

export default FeedbackMain;