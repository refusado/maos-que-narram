const BASE_URL = "http://127.0.0.1:8000/api";

const apiRoutes = {
  auth: {
    login: `${BASE_URL}/auth/login`,
  },
  stories: {
    list: `${BASE_URL}/list/stories`,
    create: `${BASE_URL}/stories`,
  },
  questions: {
    create: `${BASE_URL}/questions`,
    list: `${BASE_URL}/questions`,
  },
  answers: {
    create: `${BASE_URL}/answers`,
    list: (questionId: number) => `${BASE_URL}/answers/${questionId}`,
  },
};

export default apiRoutes;
