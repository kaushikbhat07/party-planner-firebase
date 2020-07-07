import React from 'react';
import moment from 'moment'

const Notifications = (props) => {
	const { notifications } = props;
	return (
		<div className="section">
			<div className="card z-depth-0 notification-wrapper">
				<div className="card-content">
					<h5 className="card-title">Notifications</h5>
					<ul className="notifications">
						{
							notifications && notifications.map(item => {
								return (
									<li key={item.id}>
										<span className="pink-text">
											{item.user}&nbsp;
										</span>
										<span>
											{item.content}
										</span>
										<div className="grey-text note-date">
											{moment(item.time.toDate()).fromNow()}
										</div>
									</li>
								);
							})
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Notifications;