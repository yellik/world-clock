import React from 'react';

interface ClockProps {
  timezone: string;
  time: string;
}



const Clock: React.FC<ClockProps> = ({timezone, time}) => {
  return (
    <div className='clock-container'>
      <div>{timezone}</div>  
      <div>{time} : </div>
    </div>
  );
};

export default Clock;
