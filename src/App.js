import './App.css';
import React ,{useState} from 'react';

export default function App(){
	const[flag, setFlag] = useState(0);
	
	function show_resume(){
		if(flag === 0){
			document.getElementById("resume_png").style.display = "block";
			setFlag(1);
			
		}
		else{
			document.getElementById("resume_png").style.display = "none";
			setFlag(0);
			
		} 
		
	}
	function remove_resume(){
		document.getElementById("resume_png").style.display = "none";
	}

	return(
		<>
		<html>
		   <body>
		   <img onClick = {() => show_resume()} onMouseLeave = {() => remove_resume()} id = "resume_png" class = "resume_png" src = "resume.png" alt ="resume"></img>	
		   <h1 id = "header">Kevin Wu</h1>
		   <div class = "contact_info">
		   <div class = "email">kwu3568@gmail.com</div>
		   <div class = "phone_number">(917)-968-3876</div>
		   </div>
		   <div class = "links">
		   <a href = "https://github.com/kwu3568" target="_blank" rel="noreferrer">
		   <img class = "github" src = "github.png" alt="github"></img>
		   </a>
		   <a href = "https://www.linkedin.com/in/kevin-wu-871287118" target= "_blank">
		   <img class = "linkedin" src = "linkedin.png" alt="linkedin"></img>
		   </a>
		   <img onClick = {() => show_resume()} class = "resume" src = "resume.jpeg" alt="resume"></img>
		   </div>
		   </body>
		   </html>
		</>
	)
}	

/*
class App extends React.Component{

  constructor(props){
  	super(props);
  	this.state = {
  		flag: 0
  	}
  	
  }
  show_resume(){
  	if(this.state.flag === 0){
  		document.getElementById("resume_png").style.display = "inline-block";
  		this.setState({
  			flag: 1
  		})
  	}
  	else{
  		document.getElementById("resume_png").style.display = "none";
  		this.setState({
  			flag: 0
  		})
  	}
  }
  renderList(){
  return (
   <html>
   <body>
   <h1 id = "header">Kevin Wu</h1>
   <div class = "resume_container">
   <img onClick = {() => this.show_resume()} id = "resume_png" class = "resume_png" src = "resume.png" alt ="resume"></img>
   </div>
   <div class = "contact_info">
   <div class = "email">kwu3568@gmail.com</div>
   <div class = "phone_number">(917)-968-3876</div>
   </div>
   <div class = "links">
   <a href = "https://github.com/kwu3568" target= "_blank">
   <img class = "github" src = "github.png" alt="github"></img>
   </a>
   <a href = "https://www.linkedin.com/in/kevin-wu-871287118" target= "_blank">
   <img class = "linkedin" src = "linkedin.png" alt="linkedin"></img>
   </a>
   <img onClick = {() => this.show_resume()} class = "resume" src = "resume.jpeg" alt="resume"></img>
   </div>   
   </body>
   </html>
  );
}
 render(){
 	return(
 		this.renderList()
 	)
 }
}

export default App;
*/
