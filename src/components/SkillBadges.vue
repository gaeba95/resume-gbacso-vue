<template>
  <div class="flex gap-2 flex-wrap">
    <span v-for="s in skills" :key="s.i18n"
      class="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 dark:bg-blue-950 text-blue-700 dark:text-blue-200 font-medium text-xs shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition">
      <i :class="iconClass(s)" class="text-base"></i>
      {{ $t(s.i18n) }}
    </span>
  </div>
</template>

<script setup>
const skills = [
  { icon: "fa-code", i18n: "skill_backend" },
  { icon: "fa-java", i18n: "skill_java", brand: true },
  { icon: "fa-file-code", i18n: "skill_html" },
  { icon: "fa-database", i18n: "skill_sql" },
  { icon: "fa-users", i18n: "skill_agile" },
  { icon: "fa-gitlab", i18n: "skill_gitlab", brand: true },
  { icon: "fa-server", i18n: "skill_server" },
  { icon: "fa-chart-line", i18n: "skill_analysis" }
];

function iconClass(s) {
  return s.brand ? `fa-brands ${s.icon}` : `fa-solid ${s.icon}`;
}
</script>