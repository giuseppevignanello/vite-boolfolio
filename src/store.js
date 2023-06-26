import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "https://api.giuseppevignanello.com",
  ProjectsPath: "api/projects",
  projects: [],
  currentPage: 1,
  lastPage: 1,
  loading: true,

  getProjects(url) {
    axios
      .get(url, { params: { page: this.currentPage } })
      .then((response) => {
        this.loading = false;
        this.projects = response.data.projects.data;
        this.currentPage = response.data.projects.current_page;
        this.lastPage = response.data.projects.last_page;
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
