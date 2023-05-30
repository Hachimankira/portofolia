import { AppShortcut, ArtTrack, Code } from "@mui/icons-material";
import Education from "./Education";
import WebIcon from '@mui/icons-material/Web';


const INFO = {
	main: {
		title: "Sabin Shrestha",
		name: "Sabin Shrestha",
		email: "Sabin9860819025@gmail.com",
		logo: "../logo.png",
		dob: "1999-01-01",
		address: "Kathmandu,Nepal",
		phone: "9851185981",
		intrest: "Football, Reading",
		freelance: "Available"
	},


	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/pasalnp",
		linkedin: "https://www.linkedin.com/in/Sabin-shrestha-823b2520a/",
		instagram: "https://www.instagram.com/sa_bin_sth/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://www.facebook.com/sabinsth44",
	},

	homepage: {
		title: "Full-stack Web and Mobile App developer, and Graphic Designer.",
		description: "I am a software and mobile app developer with a passion for graphics designing and photography. I have over 5 years of experience in the industry, and I am proficient in a variety of programming languages and graphics design software. I am a creative and innovative thinker, and I am always looking for new ways to use technology to solve problems. I am also a team player, and I am always willing to help others.",
		description1: "In my portfolio, I showcase my work in software development, graphics design, and photography. I hope you enjoy my work!"
	},

	about: {
		title: "I’m Sabin Shrestha N. I live in Nepal, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	whatIDo: [
		{
			icon: <WebIcon sx={{ fontSize: 80 }} />,
			title: "Web Applications"
		},
		{
			icon: <AppShortcut sx={{ fontSize: 80 }} />,
			title: "Mobile Application"
		},
		{
			icon: <ArtTrack sx={{ fontSize: 80 }} />,
			title: "Graphics Design"
		}
	],

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	article: [
		{
			category: "IT",
			date: "2023-05-28",
			title: "Title 1",
			description: "Article 1",
			image: ""
		},
		{
			category: "IT",
			date: "2023-05-28",
			title: "Title 1",
			description: "Article 1",
			image: ""
		},
		{
			category: "IT",
			date: "2023-05-28",
			title: "Title 1",
			description: "Article 1",
			image: ""
		}
	],

	projectsHeading: {
		title: "This are all my projects",
		description: "I've worked on a variety of projects over the years and I'm proud of the progress I've made."
	},
	projects: [

		{
			title: "Pasal.com.np",
			description:
				"React, Node",
			type: "Web Application, Graphics design",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			logo1: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			logo2: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "https://stockmanagement.pasal.com.np/",
			link: "https://stockmanagement.pasal.com.np/",
			image: "./pasal.png"
		},

		{
			title: "Photopasal.com.np",
			description:
				"React, Node",
			type: "Web Application, Graphics design",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			logo1: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			logo2: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
			image: "./photo.jpg"
		},

		{
			title: "Archerygarage.com",
			description:
				"React, Node",
			type: "Mobile Application",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			logo1: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			logo2: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
			image: "./archery.jpg"
		},

		{
			title: "Karunahospital.com.np",
			description:
				"React, Node",
			type: "Web Application, Graphics design",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			logo1: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			logo2: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
			image: "./project1.jpg"
		},

		{
			title: "Sayas Bakery",
			description:
				"React, Node",
			type: "Graphics design",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			logo1: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			logo2: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
			image: "./sayas.jpg"
		},

	],

	education: [
		{
			year: "2000-13",
			name: "Peak Point Academy",
			degree: "Secondary level"
		},
		{
			year: "2013-15",
			name: "Herald Point Academy",
			degree: "Higher level"
		},
		{
			year: "2015-19",
			name: "EDX Harvard",
			degree: "University"
		},
		{
			year: "2019-21",
			name: "EDX Harvard",
			degree: "Masters"
		},
		{
			year: "2021-23",
			name: "Youtube",
			degree: "Graduation"
		}
	],

	experience: [
		{
			year: "2015-17",
			name: "Karuna Hospital",
			job: "IT officer"
		},
		{
			year: "2013-15",
			name: "Photopasal.com",
			job: "Full Stack Developer"
		},
		{
			year: "2015-19",
			name: "Software pasal",
			job: "CEO"
		}
	],

	knowledge: {
		skill1: "Adobe Photoshop, Illustrator, Lightroom ",
		skill2: "Premier Pro, After Effects ",
		skill3: "React, Node.js ",
		skill4: "PHP, Postman ",
		skill5: "Adobe After Effects",
		skill6: "Flutter, Figma ",
	},
	contact_details:
		[
			{
				name: 'Phone',
				contact1: "9851185981",
				contact2: "9851185981"
			},
			{
				name: 'Email',
				contact1: "Sabin.sth444@gmail.com",
				contact2: "Sabin.sth444@gmail.com"
			},
			{
				name: 'Phone',
				contact1: "Kathmandu,Nepal",
				contact2: "Kathmandu,Nepal"
			},
		]



};

export default INFO;
