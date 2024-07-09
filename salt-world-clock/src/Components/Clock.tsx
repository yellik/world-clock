import React from 'react';

interface ClockProps {
  time: string;
  timezone: string;
}



const Clock: React.FC<ClockProps> = ({timezone, time}) => {
  return (
    <div className='clock-container'>
      <div>{timezone} </div>
      <div className='clock'>{time}</div>  
      
    </div>
  );
};

export default Clock;
