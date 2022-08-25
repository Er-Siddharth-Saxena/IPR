import classNames from 'classnames'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const StartButton = () => {
  return (
    <button className={classNames({
        "bg-black hover:bg-gray-700 text-white py-2 px-4 border border-black-400 rounded-lg shadow-md text-sm font-medium": true,
    })}>
        Get Started
        <ArrowForwardIcon className={classNames({
            "ml-1 scale-75": true,
        })}/>
    </button>
  )
}
