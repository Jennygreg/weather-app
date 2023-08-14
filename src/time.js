import React from "react";
function Time(props) {
  const Days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const hour = props.timeStamp.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.timeStamp.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let second = props.timeStamp.getSeconds();
  if (second < 10) {
    second = `0${second}`;
  }
  return (
    <div>
      <p>
        {Days[props.timeStamp.getDay()]}, {props.timeStamp.getDate()}{" "}
        {Months[props.timeStamp.getMonth()]}, {props.timeStamp.getFullYear()}{" "}
        <br />
        <span>
          Last Updated: {hour}:{minute}:{second}
        </span>
      </p>
    </div>
  );
}
export default Time;
