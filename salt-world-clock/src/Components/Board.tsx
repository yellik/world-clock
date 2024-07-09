import Clock from './Clock'

const Board = () => {

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