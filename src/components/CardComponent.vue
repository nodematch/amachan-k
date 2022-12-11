<template>
  <div class="card bg-light">
    <div class="card-body">
      <h5 class="card-title fs-4">{{ content.title }}</h5>
      <div class="card-text fs-5 py-3" v-html="content.message"></div>
      <div class="text-center">
        <img
          :src="require(`../assets/img/${content.image}`)"
          class="img-fluid rounded img1"
          alt="ImageHere"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface Card {
  title: string;
  message: string;
  image: string;
}

export default defineComponent({
  name: "CardComponent",
  props: {
    content: {
      type: Object as PropType<Card>,
      default: () => {
        return {
          title: "地域の施設訪問、レクリエーション",
          message:
            "&老人介護施設や病院で、利用者・患者さんにレクリエーションを行っています。生き生きと、楽しく、認知症予防にもなる内容を心がけています。",
          image: "TYRONE_WOODS.jpg",
        };
      },
    },
  },
});
</script>
