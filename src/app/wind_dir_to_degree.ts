export const wind_dir_to_degree = (wind_dir: string): string => {
	switch (wind_dir) {
		case 'N':
			return 'transform:rotate(0deg)';
		case 'E':
			return 'transform:rotate(90deg)';
		case 'S':
			return 'transform:rotate(180deg)';
		case 'W':
			return 'transform:rotate(270deg)';
		case 'NE':
			return 'transform:rotate(45deg)';
		case 'SE':
			return 'transform:rotate(135deg)';
		case 'SW':
			return 'transform:rotate(225deg)';
		case 'NW':
			return 'transform:rotate(315deg)';
		case 'NNE':
			return 'transform:rotate(22.5deg)';
		case 'ENE':
			return 'transform:rotate(67.5deg)';
		case 'ESE':
			return 'transform:rotate(112.5deg)';
		case 'SSE':
			return 'transform:rotate(157.5deg)';
		case 'SSW':
			return 'transform:rotate(202.5deg)';
		case 'WSW':
			return 'transform:rotate(247.5deg)';
		case 'WNW':
			return 'transform:rotate(292.5deg)';
		case 'NNW':
			return 'transform:rotate(337.5deg)';
		default:
			return 'display: none';
	}
};
