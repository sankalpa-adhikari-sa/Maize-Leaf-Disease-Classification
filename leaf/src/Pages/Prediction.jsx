import React,{ useState,useRef  } from 'react'
import axios from 'axios'
import './css/Prediction.css'

function Prediction() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState('');
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(file)
  };
  const handleRemove = (event) => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setPrediction('')
  };
  const handleSubmit= async (event)=> {
    event.preventDefault();
    setIsLoading(true)
    if (file) {
      console.log(file)
      const formData = new FormData();
      formData.append('image', file);
      axios.post('http://127.0.0.1:8000/predict/', formData)
      .then(response => {
        console.log(response.data.predicted_class)
        setIsLoading(false);
        setPrediction(response.data.predicted_class);
       
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
    }
  }
  return (
    <div className='PredictionPage'>
      <div className='Portion1'>
        <form className='FormWrapper' onSubmit={handleSubmit}>
          <input type='file' required ref={fileInputRef} onChange={handleFileChange}/>
          <button className='SubmitButton' type='submit' >submit</button>
          <div onClick={handleRemove} className='RemoveButton' >Remove</div>
        </form>

        {file? 
        <div className='UploadDetailWrapper'>
          <div className='UploadHeader'>Upload Details</div>
          FileName: {file.name}<br/>
          FileSize: {file.size} kb <br/>
          Type: {file.type}
        </div>:null}
      </div>

      <div className='test'>
        Result
        {isLoading ? <p className='loading'>loading...</p> : null}
        {prediction && <div className='prediction__result'>Prediction: <span className='ResultText'>{prediction}</span> </div>}
      </div>
    </div>
  )
}

export default Prediction