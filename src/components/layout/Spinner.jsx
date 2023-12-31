import SpinnerGif from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="w-100 mt-200">
        <img
            width={80}
            className='text-center mx-auto'
            src={SpinnerGif}
            alt="Loading"
        />
    </div>
  )
}

export default Spinner