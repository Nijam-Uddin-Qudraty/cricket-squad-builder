import React from "react";
import PropTypes from "prop-types";

const Newsletter = () => {
	return (
		<div className="absolute bottom-[400px] left-0 right-0 z-10  px-4">
			<div className="  max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
				<h2 className="text-2xl font-bold text-center mb-4">
					Subscribe to our Newsletter
				</h2>
				<p className="text-gray-600 text-center mb-6">
					Get the latest updates and news right in your inbox!
				</p>

				<div className="flex flex-col sm:flex-row gap-2">
					<input
						type="email"
						placeholder="Enter your email"
						className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

Newsletter.propTypes = {};

export default Newsletter;
