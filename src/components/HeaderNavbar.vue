<template>
  <div class="greenA">
    <div class="container">
      <p class="px-4 pt-3 h4">
        <span class="fw-light fs-4">ボランティア&ensp;</span>
        <span class="fs-3">あまちゃんの会</span>
      </p>
    </div>
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid px-5">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <div v-for="item in menuContents" :key="item.text">
              <li class="nav-item">
                <div
                  class="nav-link active px-2 mx-2 my-auto text-primary fs-4 btn-outline-light"
                  aria-current="page"
                  type="button"
                  @click="item.func"
                >
                  {{ item.text }}
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import router from "@/router";
export interface Menu {
  text: string;
  func: (payload: MouseEvent) => void;
}

export default defineComponent({
  name: "HeaderComponent",
  props: {
    menuContents: {
      type: Array as PropType<Menu[]>,
      default: () => [
        { text: "トップ", func: () => router.push({ name: "HomeView" }) },
        { text: "内容", func: () => router.push({ name: "AboutView" }) },
      ],
    },
  },
});
</script>
