export const statusTypes = (filename = '', isFolder) => ({
	DEFAULT: { text: 'Выбери файл или перетащи его сюда.', icon: 'download' },
	ACCEPTED: {
		text: `Файл «${filename.toUpperCase()}» загружен.`,
		icon: 'check',
	},
	REJECTED: {
		text: `${isFolder ? 'Папка' : 'Файл'} «${filename.toUpperCase()}» ${
			isFolder ? 'отклонена' : 'отклонён'
		}.`,
		icon: 'exclamation-triangle',
	},
});

export const readFile = file => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.addEventListener('load', function(event) {
			const { result } = event.target;
			resolve(result);
		});
		if (file) {
			reader.readAsText(file);
		}
	});
};
