class Homepage extends React.Component {
	render(){

		return(
        <div>
        <p> This is a great sire for viewing trading cards.</p> 
        <a href="/cards">Click to view trading cards</a>
        <img src="/static/img/ballonicorn.jpg"/>
        </div>
        );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));