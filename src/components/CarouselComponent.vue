<template>
  <div
    id="carouselIndicators"
    class="carousel slide mx-auto p-2"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          :src="require(`../assets/img/${array[0].image}`)"
          class="img-fluid d-block mx-auto img1"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          :src="require(`../assets/img/${array[1].image}`)"
          class="img-fluid d-block mx-auto img1"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          :src="require(`../assets/img/${array[2].image}`)"
          class="img-fluid d-block mx-auto img1"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface Caro {
  text: string;
  image: string;
}

export default defineComponent({
  name: "CarouselComponent",
  props: {
    array: {
      type: Array as PropType<Caro[]>,
      required: true,
    },
  },
});
</script>
