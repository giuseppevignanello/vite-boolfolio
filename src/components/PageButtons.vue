
<script>
import { store } from '../store';

export default {
    data() {


        return {
            store,
        }
    },
    methods: {
        nextPage() {
            if (this.store.currentPage < this.store.lastPage) {
                this.store.currentPage++;
                this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
            }
        },
        prevPage() {
            if (this.store.currentPage > 1) {
                this.store.currentPage--;
                this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
            }
        }
    },
}
</script>

<template>
    <div class="buttons d-flex justify-content-center">

        <div class="d-grid gap-2 mx-2">
            <button type="button" name="" id="" class="btn btn-primary"> <i @click="prevPage"
                    class="fa-solid fa-arrow-left"></i></button>
        </div>

        <div class="d-grid gap-2 mx-2">
            <button type="button" name="" id="" class="btn btn-primary">

                <i @click="nextPage" class="fa-solid fa-arrow-right"></i> </button>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>