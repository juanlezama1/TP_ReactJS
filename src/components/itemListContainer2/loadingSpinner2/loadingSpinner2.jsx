import './loadingSpinner2.css'

const LoadingSpinner2 = ({text}) => {
    
    let loading_text = []

    for (let letter_index = 0; letter_index < text.length; letter_index++)

    {
        text[letter_index] == ' ' ? loading_text.push(<span key={letter_index}>&nbsp;</span>): loading_text.push(<span key={letter_index}>{text[letter_index]}</span>)
    }

    return (
        
        <>
        <section className='loading_section'>
            <div className="loading loading01">

            {loading_text} 
            
            </div>
        </section>

        <div className="spinner_section d-flex justify-content-center">
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only"></span>
            </div>
        
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only"></span>
            </div>
        
            <div className="spinner-grow text-dark" role="status">
            <span className="sr-only"></span>
            </div>
        </div>
        </>
    )
  }
  
  export default LoadingSpinner2;

  