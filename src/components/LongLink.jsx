import { useState } from 'react';
function LongLink(props) {
	const [link, setLink] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ url: link });
		/* fetch('http://localhost:5000/shorten', {
			method: 'POST',
			body: JSON.stringify({ url: link }),
		})
			.then((data) => data.json())
			.then((data) => console.log(data)); */
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				onChange={(e) => setLink(e.target.value)}
				placeholder='Type a link...'
				autoFocus
			/>
			<button>Short!</button>
		</form>
	);
}

export default LongLink;
