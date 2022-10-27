import LocalizedStrings from 'react-localization';

export const locale = new LocalizedStrings({
	/*	EN */
	en: {
		// header
		'home-title': 'Collections',
		'register-login': 'Register/Login',
		back: "Back",
		search: "Search for collections",
		'log out': "Log out",

		// registration
		register: "Register Now",
		member: "Are you member ?",
		username: "Username",
		email: "Email",
		password: "Password",

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
		comment: 'Comments',

		// add-collection
		'collection-name': "Collection name",
		'add-col-name': "Name",
		desc: "Description",
		topic: 'Select a topic',
		extra: "Add extra fields",
		'extra-limit': "Each type must be at most 3 length",
		'add-field': "Add field",
		'remove-all': "Remove all fields",
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
		'field-empty-option': "Select a type",

		// add-item
		'add-item-name': 'Name',
		'tag-name': "Tag name",
		'extra-fields': "Extra fields",
		role: 'Role',
		type: 'type',
		'colors-title': 'Colors',
		colors: ['Red', 'Green', 'Yellow'],
		'add-item': "Add item",

		// action
		id: "Id",
		firstname: "First Name",
		lastname: "Last Name",
		date: "Date of Birth",
		country: "Country",
		phone: "Phone",
		actions: "Actions",

		// validation
		required: 'This field is required',
		selected: 'Must be selected',
	},

	/*	UZ */
	uz: {
		// header
		'home-title': "To'plamlar",
		'register-login': "Ro'yhatdan o'tish / Kirish",
		back: "Orqaga",
		search: "To'plamlarni qidirish",
		'log out': "Chiqish",

		// registration
		member: "Azomisiz ?",
		register: "Hozir ro'yxatdan o'ting",
		username: "Foydalanuvchi nomi",
		email: "Elektro'n po'chta",
		password: "Parol",

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
		comment: 'Izohlar',

		// add-collection
		'collection-name': "To'plam nomi",
		'add-col-name': "Nom",
		desc: "Izox",
		topic: "Mavzu tanlang",
		extra: "Qo'shimcha qatorr qo'shing",
		'extra-limit': "Har bir turning uzunligi 3 ta dan oshmasligi kerak",
		'add-field': "Qator qo'shish",
		'remove-all': "Barcha qatorni o'chirish",
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
		'field-empty-option': "Turini tanlang",

		// add-item
		'add-item-name': 'Nom',
		'tag-name': "Tag nomi",
		'extra-fields': "Qo'shimcha qatorlar",
		role: "Ro'li",
		type: 'Turi',
		'colors-title': "Ranglar",
		colors: ["Qizil", "Yashil", "Sariq"],
		'add-item': "Item ni qo'shish",

		// action
		id: "Id",
		firstname: "Ism",
		lastname: "Familiya",
		date: "Tug'ilgan kun/oy/yil",
		country: "Mamlakat",
		phone: "Shaxsiy telefo'n raqam",
		actions: "Amallar",

		// validation
		required: "Ushbu qator to'ldirilishi shart",
		selected: "Tanlanishi shart",
	}
});