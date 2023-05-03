import screen from './ScreenWidth.module.css';
import Divider from '@mui/material/Divider';

function ScreenWidth() {
    const scaleList = [
        "100%", "150%", "200%", "75%", "50%", "25%"
    ]
    return (
        <>
            <div className={screen.screenContainer}> 
                <select
                    className={screen.selectContainer} 
                    id="fontStyle"
                >
                    <option>Fit</option>
                    {scaleList.map((x) => (
                        <option key={x}>{x}</option>
                    ))}
                </select>
               
            </div>
            <div className={screen.divider}>
                <Divider orientation="vertical" variant="middle" sx={{ height: "65%" }}  />
                </div>
        </>
    )
}

export default ScreenWidth;



