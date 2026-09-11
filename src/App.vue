<template>
  <tabs sticky @change="onTabChanged">
    <tab title="页卡1">
      <div class="cell" v-for="i in 40" :key="i">
        页卡1的内容 <van-button @click="buttonClicked">按钮</van-button>
      </div>
    </tab>
    <tab title="页卡2">
      <div class="cell" v-for="i in 30" :key="i">
        页卡2的内容 <van-button @click="buttonClicked">按钮</van-button>
      </div>
    </tab>
  </tabs>
  <div id="logger">
    <div>root scrollTop: {{ rootScrollTop }}</div>
    <div>root getBoundingClientRect: {{ rootRect }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tab, Tabs, Button as VanButton } from 'vant';

function buttonClicked() {
  alert('button clicked');
}

const rootScrollTop = ref(0);
const rootRect = ref(document.documentElement.getBoundingClientRect());

function onTabChanged() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      rootScrollTop.value = document.documentElement.scrollTop;
      rootRect.value = document.documentElement.getBoundingClientRect();
    })
  })
}
</script>

<style scoped>
.cell {
  padding: 10px;
}
#logger {
  position: fixed;
  right: 10px;
  bottom: 200px;
  width: 200px;
  border: 1px solid #dfdfdf;
  padding: 4px 8px;
  font-size: 12px;
}
</style>


