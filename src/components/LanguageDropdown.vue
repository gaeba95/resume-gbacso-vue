<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="showMenu = !showMenu">
      <span>{{ localeLabels[currentLocale] }}</span>
      <span class="icon">&#9660;</span>
    </button>
    <ul v-if="showMenu" class="dropdown-menu" @mouseleave="showMenu = false">
      <li v-for="loc in locales" :key="loc" @click="changeLocale(loc)" :class="{ active: currentLocale === loc }">
        {{ localeLabels[loc] }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showMenu = ref(false)

const locales = ['en', 'fr']
const localeLabels: Record<string, string> = {
  en: '🇬🇧 English',
  fr: '🇫🇷 Français',
}

const currentLocale = computed(() => locale.value)

function changeLocale(loc: string) {
  locale.value = loc
  showMenu.value = false
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background: #D3E5F7;
  border: 1px solid #69A5FF;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 18px 8px 12px;
  cursor: pointer;
  min-width: 130px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #69A5FF;
}

.icon {
  font-size: 13px;
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 110%;
  min-width: 130px;
  background: #D3E5F7;
  border: 1px solid #69A5FF;
  border-radius: 4px;
  z-index: 10;
  margin-top: 4px;
  animation: fadeIn 0.12s;
  box-shadow: 0 3px 14px 0 #0002;
  list-style: none;
  padding: 0;
  color: #69A5FF;
}

.dropdown-menu li {
  padding: 9px 12px;
  cursor: pointer;
  transition: background 0.1s, color 0.1s;
}

.dropdown-menu li.active,
.dropdown-menu li:hover {
  background: #69A5FF;
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>