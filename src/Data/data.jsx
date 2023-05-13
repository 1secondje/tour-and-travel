
export const data = {
	header: {
			nav: [
					{id: 1, name: 'Home', link: '#'},
					{id: 2, name: 'Destinations', link: '#'},
					{id: 3, name: 'About', link: '#'},
					{id: 4, name: 'Partner', link: '#'},
			],
			logo: 'logo.svg'
	},
	start: {
		title: 'Explore and Travel',
		img: 'start.png',
		selectors: {
			arrow: 'arrow.svg',
			location: {
				name: 'Location',
				countries: [
					{id: 1, name: 'France'},
					{id: 2, name: 'Italy'},
					{id: 3, name: 'Ukraine'},
					{id: 4, name: 'Germany'},
					{id: 5, name: 'Spain'},
				]
			},
			activity: {
				name: 'Activity',
				activities: [
					{id: 1, name: 'Camping'},
					{id: 2, name: 'Safari'},
					{id: 3, name: 'Fishing'},
					{id: 4, name: 'Hunting'},
					{id: 5, name: 'Cycling'},
				]
			},
			grade: {
				name: 'Grade',
				grades: [
					{id: 1, name: '1'},
					{id: 2, name: '2'},
					{id: 3, name: '3'},
					{id: 4, name: '4'},
					{id: 5, name: '5'},
				]
			}
		}
	},
	about: {
		title: 'A new way to explore the world',
		text: 'For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way',
		img: 'about.png'
	},
	destinations: {
		title: 'Featured destinations',
		cards: [
			{city: 'Raja Ampat', country: 'Indonesia', img: 'indonesia.png'},
			{city: 'Fanjingshan', country: 'China', img: 'china.png'},
			{city: 'Vevey', country: 'Switzerland', img: 'switzerland.png'},
			{city: 'Skadar', country: 'Montenegro', img: 'montenegro.png'},
		]
	},
	guide: {
		title: 'Guides by Thousand Sunny',
		text: 'Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.',
		img: 'guide.png'
	},
	testimonials: {
		title: 'Testimonials',
		cards: [
			{id: 1, text: '“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”', name: 'Edward Newgate', company: 'Founder Circle', img: 'testimonials.png'},
			{id: 2, text: '“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”', name: 'Edward Newgate', company: 'Founder Circle', img: 'testimonials.png'}
		]
	},
	stories: {
		title: 'Trending stories',
		cards: [
			{id: 1, name:'The many benefits of taking a healing holiday', text: '‘Helaing holidays’ are on the rise tohelp maximise your health and happines...', img: 'stories__img1.png'},
			{id: 2, name:'The best Kyoto restaurant to try Japanese food', text: 'From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...', img: 'stories__img2.png'},
			{id: 3, name:'Skip Chichen Itza and head to this remote Yucatan', text: 'It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...', img: 'stories__img3.png'},
			{id: 4, name:'Surf’s up at these beginner spots around the world', text: 'If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...', img: 'stories__img4.png'}
		]
	},
	footer: {
		logo: 'logo.svg',
		text: 'Plan and book your perfect trip with	expert advice, travel tips destination information from us',
		year: '©2020 Thousand Sunny. All rights reserved',
		destinations: [
			{id:1, name: 'Africa'},
			{id:2, name: 'Antarctica'},
			{id:3, name: 'Asia'},
			{id:4, name: 'Europe'},
			{id:5, name: 'America'},
		],
		shop: [
			{id:1, name: 'Destination Guides'},
			{id:2, name: 'Pictorial & Gifts'},
			{id:3, name: 'Special Offers'},
			{id:4, name: 'Delivery Times'},
			{id:5, name: 'FAQs'},
		],
		interests: [
			{id:1, name: 'Adventure Travel'},
			{id:2, name: 'Art And Culture'},
			{id:3, name: 'Wildlife And Nature'},
			{id:4, name: 'Family Holidays'},
			{id:5, name: 'Food And Drink'},
		]
	}
}