<template>
  <div>
    <!-- <ul>
      <li v-for="(item, index) in girls" :key="index">
        {{ item }}
      </li>
      {{selectGirl}}
    </ul> -->
  </div>
</template>

<script lang="ts">
import { DataProps } from "@/types/home";
import { reactive, toRefs } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  name: "Home",
  setup() {
    const data: DataProps = reactive({
      girls: ["a", "b"],
      selectGril: "",
      selectGirlFn: (index: number) => {
        data.selectGril = data.girls[index];
      },
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
