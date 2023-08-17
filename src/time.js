import React,{useState, useEffect} from 'react';
function Time(props) {
  const[timeStamp, setTimeStamp]= useState(props.timeStamp); 
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeStamp(new Date() );
    }, 1000); // 
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let hour = timeStamp.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = timeStamp.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let second = timeStamp.getSeconds();
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
        {hour}:{minute}:{second}
        </span>
      </p>
    </div>
  );
}
export default Time;
