import React from 'react';

interface ClockProps {
  city: string;
  hours: number;
  minutes: number;
  seconds: number;
}

const Clock: React.FC<ClockProps> = ({city, hours, minutes, seconds }) => {
  return (
    <div className='clock-container'>
      <div>{city}</div>  
      <div>{hours} : </div>
      <div>{minutes} : </div>
      <div>{seconds}</div>
    </div>
  );
};

export default Clock;
