import React from 'react'
import classes from "./FeedbackMain.module.css"
import { FaStar } from "react-icons/fa";

const FeedbackMain = () => {
  return (
    <div className={classes.main_area}>
      <h2 className="">All Feedbacks</h2>


      <div className={classes.feesbacks_box_wrapper}>
        <div className={classes.feedback_box}>
          <h2>Bad product condition</h2> 
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className="">View Review</button>
        </div>
        <div className={classes.feedback_box}>
          <h2>Bad product condition</h2> 
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className="">View Review</button>
        </div>
        <div className={classes.feedback_box}>
          <h2>Bad product condition</h2> 
          <p>The goods i ordered was delivered to me in avery bad condition rather than what i saw on the website...</p>
          <div className="">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className="">View Review</button>
        </div>
      </div>
    </div>
  )
}

export default FeedbackMain;