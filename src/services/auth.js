import sloovi, { BASE_URL, customHeaders } from "./index";
const companyId = "company_413ef22b6237417fb1fba7917f0f69e7";
class AuthService {
  static async login(payload) {
    return await sloovi.post(`${BASE_URL}/login`, payload, {
      headers: customHeaders,
    });
  }

  static async getUser(payload) {
    return await sloovi.get(
      `${BASE_URL}/team?product=outreach&company_id=${companyId}`,
      {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${payload}`
        },
      }
    );
  }
};

export default AuthService;
