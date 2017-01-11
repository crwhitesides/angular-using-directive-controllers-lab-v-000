function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username | lowercase }}</span>',
			'</div>'
		].join(''),
		controller: function ($filter) {
			$filter('lowercase')();
		},
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
