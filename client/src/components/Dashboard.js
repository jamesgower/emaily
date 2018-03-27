import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { connect } from 'react-redux';
import Header from './Header';

const Dashboard = ({ surveys }) => {
	return (
		<div>
			<Header />
			<div className="container">
			<h4 style={{textAlign: 'center'}}>Dashboard</h4>
			{ 
				surveys.length === 0
				? 	<div style={{textAlign: 'center'}}>
						<p>There are no surveys to display. Please add send a survey using the + button for responses to display.</p>
						<p>If you think this is an error, please contact us <a href="" target="_blank">here</a></p>
					</div>
				: 	<div style={{textAlign: 'center'}}>
						<p>Here are your current survey responses. Responses can take a minute or so to appear, so please be patient while this updates.</p>
					</div>
			}
			<SurveyList />
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
		</div>
	);
};

const mapStateToProps = ({ surveys }) => {
	return {
		surveys,
	};
};

export default connect(mapStateToProps)(Dashboard);
