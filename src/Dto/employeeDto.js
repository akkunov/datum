class Clinic {
    constructor(data) {
    }
}



class User {
    constructor(data) {
    }
}

// class EmployeeDto {
//     constructor(data) {
//     }
// }

class Person {
    constructor() {
    }
}

export const EmployeeDto=  {
    post: "DENTIST",
    user: {
	email: "user@gmail.com",
	person: {
	    phone: [
		{
		    number: "+996 777 123456",
		    whatsapp: true,
		    telegram: true,
		    viber: true
		}
	    ],
	    firstname: "Үсөн",
	    surname: "Асанов",
	    patronymic: "Жаңыбаевич",
	    address: "пр. Чуй 205, Бишкек, Кыргызстан",
	    email: "user@gmail.com",
	    country: "KGZ",
	    family: true,
	    male: true,
	    issue: "2019-12-31",
	    expiry: "2029-12-31",
	    authority: "MKK",
	    birthDay: "1991-11-21",
	    passportSeries: "AN",
	    passportNumber: 1234567,
	    pin: 20101199100001,
	}
    }
}