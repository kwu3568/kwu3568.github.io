import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props){
  	super(props);
  	this.state = {
  		flag: 0
  	}
  	
  }
  show_resume(){
  	if(this.state.flag == 0){
  		document.getElementById("resume_pdf").style.display = "inline-block";
  		this.setState({
  			flag: 1
  		})
  	}
  	else{
  		document.getElementById("resume_pdf").style.display = "none";
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
   <img id = "resume_pdf" class = "resume_pdf" src = "resume.pdf"></img>
   </div>
   <div class = "contact_info">
   <div class = "email">kwu3568@gmail.com</div>
   <div class = "phone_number">(917)-968-3876</div>
   </div>
   <div class = "links">
   <a href = "https://github.com/kwu3568">
   <img class = "github" src = "github.png"></img>
   </a>
   <a href = "https://www.linkedin.com/in/kevin-wu-871287118">
   <img class = "linkedin" src = "linkedin.png"></img>
   </a>
   <img onClick = {() => this.show_resume()} class = "resume" src = "resume.jpeg"></img>
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
