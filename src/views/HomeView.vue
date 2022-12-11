<template>
  <div class="container">
    <carousel-component :array="carodata"></carousel-component>
    <p class="fs-2 p-2 text-center">ホーム</p>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fs-4">主な活動内容</h5>
        <div class="card-text fs-5">
          <div class="py-1">✓ 地域の施設訪問、レクリエーション</div>
          <div class="py-1">✓ 認知症カフェ</div>
          <div class="py-1">✓ あま市民病院（ロビー）でのボランティア</div>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title fs-4">会長からの挨拶</h5>
        <div class="card-text fs-5">
          &emsp;皆さんが安全で安心して暮らせるように、手と手を繋ぐ地域づくりのために、あまちゃんの会を発足させて頂きました。
          <br />&emsp;健康なら自分のことは自分できるので、健康年齢を伸ばすお手伝いをさせて頂いております。
          <br />&emsp;明るく楽しく過ごすこと、いつも笑っていることは、免疫力をアップさせます。
          <br />&emsp;笑顔あふれる仲間づくりを通じて、健康で安心して暮らせる地域づくりをこれからも目指していきます。
          <p class="text-end pt-2 pe-2">会長&emsp;渡邉みづえ</p>
        </div>
      </div>
    </div>
    <div class="px-2 py-4 my-4 fs-6 rounded-3 bg-light">
      <p class="fst-italic">ボランティアを一緒にしませんか？</p>
      <p class="fst-italic">私たちと一緒に</p>
      <p class="fst-italic">地域の為、あま市民病院の為、</p>
      <p class="fst-italic">自分自身の為にもなる活動をしましょう！</p>
      <div class="pt-1">連絡先</div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>代表</th>
            <td>渡辺みづえ</td>
          </tr>
          <tr>
            <th>電話</th>
            <td>090-3158-6152</td>
          </tr>
          <tr>
            <th>事務局メール</th>
            <td>u1yamamoto.ama@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarouselComponent, { Caro } from "@/components/CarouselComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CarouselComponent,
  },
  setup() {
    const carodata = [
      { image: "ama_cap1.jpg" },
      { image: "ama_cap2.jpg" },
      { image: "ama_sam7.jpg" },
    ] as Caro[];
    return {
      carodata,
    };
  },
});
</script>
