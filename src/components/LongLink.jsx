import { useState, useEffect } from 'react';
function LongLink() {
	const [link, setLink] = useState('');
	const [res, setRes] = useState('');
	const url = 'http://localhost:5000/shorten';

	const getShortLink = async () => {
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: { url: link },
			});

			console.log(response);
			const data = await response.json();
			setRes(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getShortLink();
	}, []);

	const handleChange = (e) => {
		setLink(e.target.value);
	};

	return (
		<div>
			<form onSubmit={getShortLink}>
				<input type='text' onChange={handleChange} />
				<button>Short link!</button>
			</form>
		</div>
	);
}

export default LongLink;
