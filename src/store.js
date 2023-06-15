import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/",
  ProjectsPath: "api/projects",
  projects: [],
  loading: true,

  getProjects(url) {
    axios
      .get(url)
      .then((response) => {
        this.loading = false;
        this.projects = response.data.projects;
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
