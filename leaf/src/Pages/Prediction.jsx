import React,{ useState,useRef  } from 'react'
import axios from 'axios'
import './css/Prediction.css'
import {MdDelete} from 'react-icons/md';

function Prediction() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [predictionprob, setPredictionprob] = useState('');
  const handleFileChange = (event) => {
    const selectedFile= event.target.files[0]
    const imageurl= URL.createObjectURL(event.target.files[0])
    setFile(selectedFile);
    setImageURL(imageurl)

    
    console.log(file)
    console.log("url",imageURL)
  };
  const handleRemove = (event) => {
    setFile(null);
    setImageURL(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setPrediction('')
    setPredictionprob('')
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
        console.log(response.data)
        setIsLoading(false);
        setPrediction(response.data.predicted_class);
        setPredictionprob(response.data.predicted_probs);
       
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
          <div className='UploadButtonWrapper'>
            <button className='SubmitButton' type='submit' >submit</button>
            <MdDelete onClick={handleRemove} className='RemoveButton'/>
          </div>
        </form>

        {file ? 
        <div className='UploadDetailWrapper'>
          <div className='UploadHeader'>Upload Details</div>
          FileName: {file.name}<br/>
          FileSize: {file.size} kb <br/>
          Type: {file.type} <br/>
          {imageURL ? 
            <div >
              Image:
              <br/>
              <img className='UploadImage' src={imageURL} />
            </div>:null}
          
          
        </div>:null}
      </div>

      <div className='test'>
        Result: 
        {isLoading ? <p className='loading'>loading...</p> : null}
        {prediction && <div className='prediction__result'>Prediction: <span className='ResultText'>{prediction}</span> </div>}
        <br />
        {predictionprob && <div className='prediction__result'>Prediction probability: <span className='ResultText'>{predictionprob} %</span> </div>}
      </div>
    </div>
  )
}

export default Prediction