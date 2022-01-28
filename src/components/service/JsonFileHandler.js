import jsonFile from '../../datas/Users.json';
const storage = window.localStorage;
storage.setItem("JSON", jsonFile);

class JsonFileService {
	static getUserRegisteredList() {
		return storage.getItem("JSON").split(',');
	}

	static addToUserRegisteredList(newJsonData) {
		let jsonData = [];
		jsonData.push(this.getUserRegisteredList());
		jsonData.push(newJsonData);
		storage.setItem("JSON", jsonData);
	}
}
export default JsonFileService