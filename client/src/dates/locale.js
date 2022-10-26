import LocalizedStrings from 'react-localization';

export const locale = new LocalizedStrings({
	/*	EN */
	en: {
		// header
		'header-title': 'Collections',
		'register-login': 'Register/Login',
		back: "Back",
		search: "Search for collections",
		'log out': "Log out",

		// registration
		member: "Are you a member ?",
		username: "Username",
		email: "Email",
		password: "Password",
		register: "Register Now",

		// login
		'not-member': "Not a member yet",
		login: "Login now",

		// section
		'last-updates': 'Last updates',
		'top-big': 'Top big collections',

		// card
		item: "Item",
		author: 'Author',
		published: 'Published',
		collection: 'Collection',

		// comments
		comments: 'Comments',

		// add-collection
		'add-collection': "Add collection",
		name: "Name",
		'collection-name': "Collection name",
		desc: "Description",
		extra: "Add extra fields",
		'add-field': "Add field",
		save: "save",
		topics: [
			'Art or Design',
			'Clothes',
			'Mugs',
			'Bags',
			'Drinks',
			'Watchs',
			'Films',
			'Technology',
			'Masks and Bandals',
			'Meals',
			'Fruits',
			'Chocolate',
			'Pillows',
			'Boards',
			'Ring',
			'Glasses',
			'Ice Cream',
			'Nature',
			'Chairs & Stools'
		],

		// add-item
		'add-item': "Add item",
		'tag-name': "Tag name",
		role: 'Role',
		type: 'type',
		'colors-title': 'Colors',
		colors: ['Red', 'Green', 'Yellow'],

		// action
		id: "Id",
		firstname: "First Name",
		lastname: "Last Name",
		date: "Date of Birth",
		country: "Country",
		phone: "Phone",
		actions: "Actions",
	},

	/*	UZ */
	uz: {
		// header
		'header-title': "To'plamlar",
		'register-login': "Ro'yhatdan o'tish / Kirish",
		back: "Orqaga",
		search: "To'plamlarni qidirish",
		'log out': "Chiqish",

		// registration
		member: "Azomisiz ?",
		username: "Foydalanuvchi nomi",
		email: "Elektro'n po'chta",
		password: "Parol",
		register: "Hozir ro'yxatdan o'ting",

		// login
		'not-member': "Azo emasmisiz ?",
		login: "Kirish",

		// section
		'last-updates': "Oxirgi yangilanishlar",
		'top-big': "Eng yirik to'plamlar",

		// card
		item: "Element",
		author: 'Mallif',
		published: 'Nashr etilgan',
		collection: "To'plamlar",

		// comments
		comments: 'Izohlar',

		// add-collection
		'add-collection': "To'plam qo'shish",
		name: "Ism",
		'collection-name': "To'plam nome",
		desc: "Izox",
		extra: "Qo'shimcha maydonlar qo'shing",
		'add-field': "Maydon qo'shish",
		save: "Saqlash",
		topics: [
			"Sanat yoki Dizayn",
			"Kiyim",
			"Krujkalar",
			"Sumkalar",
			"Ichimliklar",
			"Soatlar",
			"Filmlar",
			"Texnologiya",
			"Niqob va bandallar",
			"Ovqatlar",
			"Mevalar",
			"Shokoladlar",
			"Yostiqlar",
			"Qayiqlar",
			"Uzuklar",
			"Ko'zoynaklar",
			"Muzqaymoq",
			"Tabiat",
			"Stullar va kursilar",
		],

		// add-item
		'add-item': "Element qo'shish",
		'tag-name': "Element nomi",
		role: "Ro'li",
		type: 'Turi',
		'colors-title': "Ranglar",
		colors: ["Qizil", "Yashil", "Sariq"],

		// action
		id: "Id",
		firstname: "Ism",
		lastname: "Familiya",
		date: "Tug'ilgan kun/oy/yil",
		country: "Mamlakat",
		phone: "Shaxsiy telefo'n raqam",
		actions: "Amallar",
	}
});

// function languageChangeHandler() {
// 	setLang(lang === "uz" ? "en" : "uz")
// }

// <>
// 	<h1>
// 		{strings.how}
// 	</h1>
// 	<button
// 		onClick={languageChangeHandler}
// 		className="bg-blue-400 w-auto p-5 self-start"
// 	>
// 		change
// 	</button>
// </>



// const [lang, setLang] = useState("uz")

// useEffect(() => {

// 	strings.setLanguage(lang)

// }, [lang])
