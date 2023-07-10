class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers
  }

 /**Обработчик ошибок*/
  _handleResponce(res) {
    return res
      .json()
      .then((response) => {
        if (res.ok) {
          return response;          
        }
        return Promise.reject(new Error(response.message));
      })
  }

  /**Регистрация пользователя*/ 
  register(data) {
    return fetch(`${this._url}/signup`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
      })
      .then(this._handleResponce)
  };

  /**Авторизация пользователя*/ 
  login(data) {
    return fetch(`${this._url}/signin`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
      })
      .then(this._handleResponce)
  }

  /**Установка токена*/
  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`
  }

  /**Получить данные профиля*/
  getUserInfo() {
    return fetch(`${this._url}/users/me`,
      {
        method: 'GET',
        headers: this._headers,
      })
      .then(this._handleResponce)
  }

  /**Обновить данные профиля*/ 
  setUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ name, email })
      })
      .then(this._handleResponce)
  }
}

const mainApi = new MainApi({
  url: "http://localhost:3003",
  // url: "https://api.privalovama.diploma.nomoreparties.sbs",
  headers: {
    "content-type": "application/json",
    "Authorization": "",
  }
})

export default mainApi;