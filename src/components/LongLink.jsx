import { useState, useEffect } from 'react';
import ShortLink from './ShortLink';
function LongLink() {
	const [link, setLink] = useState('');
	const [res, setRes] = useState('');
	const url = 'http://localhost:5000/shorten';

	const handleClick = async () => {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({ url: link }),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			},
		});
		setRes(await response.json().then((e) => e.code));
	};

	/* useEffect(() => {
		handleClick();
	}, []); */

	const handleChange = (e) => {
		setLink(e.target.value);
	};

	return (
		<div>
			<input type='text' onChange={handleChange} />
			<button onClick={handleClick}>Short link!</button>
			<ShortLink url={res} />
		</div>
	);
}

export default LongLink;
