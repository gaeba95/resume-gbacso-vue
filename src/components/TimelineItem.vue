<template>
  <!-- Timeline Item -->
  <ol class="relative border-s border-gray-200 dark:border-gray-700">
    <li v-for="(item, idx) in items" :key="idx" class="mb-10 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
      </div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ item.date }}</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-400">{{ item.location }}</h3>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-400">{{ item.title }}</h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ item.desc }}</p>
    </li>
  </ol>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useI18n } from 'vue-i18n'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

const props = defineProps({
  tKey: { type: String, required: true } // e.g. 'educations' or 'experiences'
});

const { tm, locale } = useI18n();
const items = computed(() => tm(props.tKey))
</script>