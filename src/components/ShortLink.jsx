function ShortLink(props) {
	const copyLinkToClipboard = () => {
		navigator.clipboard.writeText(props.url);
	};

	const propsIsEmpty = () => {
		if (props.url != '' && props.url != undefined) {
			return (
				<div>
					<a href={'http://localhost:5000/' + props.url} target='_blank'>
						{'url-shortener/' + props.url}
					</a>
					<button onClick={copyLinkToClipboard}>Copy!</button>
				</div>
			);
		} else {
			return '';
		}
	};
	return propsIsEmpty();
}

export default ShortLink;
