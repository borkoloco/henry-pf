import "./Comments.css";
import React from "react";
import { useState } from "react";
export const Comments = () => {
  return (
    <div class="card">
      <span class="title">Leave a Comment</span>
      <form class="form">
        <div class="group">
          <input placeholder="" type="text" required="" />
          <label for="name">Name</label>
        </div>
        <div class="group">
          <input
            placeholder=""
            type="email"
            id="email"
            name="email"
            required=""
          />
          <label for="email">Email</label>
        </div>
        <div class="group">
          <textarea
            placeholder=""
            id="comment"
            name="comment"
            rows="5"
            required=""
          ></textarea>
          <label for="comment">Comment</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
