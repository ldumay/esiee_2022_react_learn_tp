import userFile from '../../datas/Users.json';
import questionFile from '../../datas/Questions.json';

const storage = window.localStorage;
const userList = "UserList";
storage.setItem(userList, userFile);

const questionList = questionFile;

class JsonFileService {
	static getUserRegisteredList() {
		return storage.getItem(userList).split(',');
	}

	static addToUserRegisteredList(newJsonData) {
		let jsonData = [];
		jsonData.push(this.getUserRegisteredList());
		jsonData.push(newJsonData);
		storage.setItem(userList, jsonData);
	}

	static getQuestionList() {
		return questionList;
	}
}
export default JsonFileService