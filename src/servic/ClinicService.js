import {$clinic} from "../http/index.js";

export class ClinicService {
    // Создание клиники
    static  async addClinic (data) {
	return $clinic.post('/clinic', data)
    }
    // добвыление филиала
    static  async addDepartment (id,data) {
	return $clinic.post(`/${id}/department`, {data})
    }
    // получение клиники
    static  async getClinic () {
	return $clinic.get('/clinic', )
    }
    // получение филлиалов
    static  async getDepartments (id) {
	return $clinic.get(`/${id}/department`, {id})
    }

    // получение работников
    static  async getEmployees (id) {
	return $clinic.post('/clinic', {id})
    }

}