import { COLORS } from 'constants/ChartConstant';

export const overallPerformanceMonth = {
	categories:[
	  'Jan', 
	  'Feb', 
	  'Jul', 
	  'Mar', 
	  'Ape', 
	  'May', 
	  'Jun'
	]
}

export const overallPerformanceData = [
	{
		name: 'Streams',
		data: [28, 25, 64, 40, 75, 45, 70]
	},
	{
		name: 'Downloads',
		data: [25, 15, 41, 25, 44, 12, 36]
	}
]

export const topProductData = [
	{
		name: 'Release 1',
		sales: 5930,
	},
	{
		name: 'Release 2',
		sales: 5177,
	},
	{
		name: 'Release 3',
		sales: 4701,
	},
	{
		name: 'Release 4',
		sales: 2833,
	},
	{
		name: 'Release 5',
		sales: 1692,
	},
]

export const topServicesColor = [COLORS[0], COLORS[1], COLORS[3], COLORS[5]]
export const topServicesData = [3561, 1443, 2462, 1693]
export const topServicesLabels = ['YouTube', 'Facebook', 'Saavn', 'Spotify']
const jointTopServicesData = () => {
	let arr = []
	for (let i = 0; i < topServicesData.length; i++) {
		const data = topServicesData[i];
		const label = topServicesLabels[i];
		const color = topServicesColor[i]
		arr = [...arr, {
			data: data,
			label: label,
			color: color
		}]
	}
	return arr
}
export const conbinedTopServicesData = jointTopServicesData()

export const regionData = [
	{
		color: '#3e82f7',
		name: 'United States',
		value: '11,452'
  	},
  	{
		color: '#04d182',
		name: 'Brazil',
		value: '5,784'
  	},
 	 {
		color: '#ffc542',
		name: 'India',
		value: '2,357'
 	},
  	{
		color: '#fa8c16',
		name: 'China',
		value: '1,780'
	},
	{
		color: '#ff6b72',
		name: 'Malaysia',
		value: '812'
	},
	{
		color: '#a461d8',
		name: 'Thailand',
		value: '430'
	}
]