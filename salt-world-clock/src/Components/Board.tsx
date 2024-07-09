import Clock from './Clock'
import { useState, useEffect } from 'react';
const Board : React.FC = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  

return (
    <div>

    <div>
        <Clock city='Stockholm' hours={hours} minutes={minutes} seconds={seconds} />
    </div>
    <div>
        <Clock city='London' hours={hours} minutes={minutes} seconds={seconds} />
    </div>
    <div>
        <Clock city='Paris' hours={hours} minutes={minutes} seconds={seconds} />
    </div>
    


    </div>
  

)

}

export default Board;