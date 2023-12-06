import {$clinic} from "../http/index.js";

export class ClinicService {
    // Создание клиники
    static  async addClinic (data) {
	const DATA = {
	    "name": "Голливудская улыбка",
	    "departments": [
		{
		    "name": "Главный",
		    "address": {
			"phone": [
			    {
				"number": "+996 777 123456",
				"whatsapp": true,
				"telegram": true,
				"viber": true
			    }
			],
			"country": "Кыргызстан",
			"city": "Бишкек",
			"region": "string",
			"street": "пр. Чүй",
			"house": 205,
			"apartment": 0,
			"latitude": "42.877317",
			"longitude": "74.600215",
			"iframe": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923\n.8231570293283!2d74.59588357567849!3d42.87657660231409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13\n.1!3m3!1m2!1s0x389eb7ddc401db31%3A0xd868494a462beaa9!2z0JHQtdC70YvQuSDQtNC-0LwsINC_0YDQvtGB0\nL8uINCn0YPQuSwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1699201561246!5m2!1sru!2skg\"\nwidth=\"600\"\nheight=\"450\"\nstyle=\"border:0;\"\nallowfullscreen=\"\"\nloading=\"lazy\"\nreferrerpolicy=\"no-referrer-when-downgrade\">\n</iframe>\n",
			"link": "https://go.2gis.com/gh71q"
		    }
		}
	    ]
	}

	return $clinic.post('/clinic', data)
    }
    // добвыление филиала
    static  async addDepartment (id,data) {
	return $clinic.post(`/${id}/department`, data)
    }
    // получение клиники
    static  async getClinic () {
	return $clinic.get('/clinic')
    }
    // получение филлиалов
    static  async getDepartments (id) {
	return $clinic.get(`/${id}/department`, {id})
    }
    static  async deleteClinic (id) {
	return $clinic.delete(`/clinic/${id}`)
    }

    static  async getClinicById(id){
	return $clinic.get(`clinic/${id}`)
    }
    // получение работников
    static  async getEmployees (id) {
	return $clinic.post('/clinic', {id})
    }

}