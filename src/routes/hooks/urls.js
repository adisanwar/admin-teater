class ApiConfig {
    constructor() {
      this.baseUrl = 'http://localhost:3000/api';
    }
  
    // Users
    login() {
      return `${this.baseUrl}/users/login`;
    }

    register() {
      return `${this.baseUrl}/users`;
    }

    getCurrentUsers() {
        return `${this.baseUrl}/users/current`;
      }

    getUsers() {
      return `${this.baseUrl}/users`;
    }

    logout() {
      return `${this.baseUrl}/users/current`;
    }

    getContact() {
      return `${this.baseUrl}/contacts`;
    }
   
    getShow() {
      return `${this.baseUrl}/shows/current`;
    }

    
  }
  
  export default new ApiConfig();
  