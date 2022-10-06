class ApiService {
  baseUrl = 'https://run.mocky.io/v3'
  async getMessages() {
    const response = await fetch(`${this.baseUrl}/8856838a-1ba9-424f-9768-6ee4209aed67`)
    return response.json()
  }
}
export const apiService = new ApiService()
