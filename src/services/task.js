import sloovi, { BASE_URL, customHeaders } from "./index";
const companyId = "company_413ef22b6237417fb1fba7917f0f69e7";

class TasksService {
  static async getAllTasks(payload) {
    return await sloovi.get(
      `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${payload}`,
      {
        headers: customHeaders,
      }
    );
  }

  static async addTask(payload) {
    return await sloovi.post(
      `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${companyId}`,
      payload,
      {
        headers: customHeaders,
      }
    );
  }

  static async getTask(taskId) {
    return await sloovi.get(
      `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${companyId}&${taskId}`,
      {
        headers: customHeaders,
      }
    );
  }

  static async updateTask(taskId, payload) {
    return await sloovi.put(
      `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${taskId}?company_id=${companyId}`,
      payload,
      {
        headers: customHeaders,
      }
    );
  }

  static async deleteTask(taskId) {
    return await sloovi.delete(
      `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${taskId}?company_id=${companyId}`,
      {
        headers: customHeaders,
      }
    );
  }
}

export default TasksService;
