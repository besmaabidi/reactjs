
import './App.css';

function App() {
  return (
    <div className='ContactForm'>
 
    <form id='contact-form' noValidate>
 
        <div className='col-6'>
          <input
            type='text'
            name='name'
            className='form-control formInput'
            placeholder='Name'
          ></input>
        </div>
       
       
        <div className='col-6'>
          <input
            type='email'
            name='email'
            className='form-control formInput'
            placeholder='Email address'
          ></input>
        </div>
     
     
        <div className='col'>
          <input
            type='text'
            name='subject'
            className='form-control formInput'
            placeholder='Subject'
          ></input>
        </div>
     
     
        <div className='col'>
          <textarea
            rows={3}
            name='message'
            className='form-control formInput'
            placeholder='Message'
          ></textarea>
        </div>
     
      <button className='submit-btn' type='submit'>
        Submit
      </button>
    </form>

    </div>
  );
}

export default App;
