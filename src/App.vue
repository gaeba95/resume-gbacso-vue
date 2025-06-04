<template>
  <div>
    <header>
      <div class="header-bar">
        <div class="name-role">
          <h1>{{ $t('common.name') }}</h1>
          <span class="role">{{ $t('role') }}</span>
        </div>
        <div class="header-actions">
          <button class="download-btn" @click="downloadPDF">
            <i class="fa-solid fa-download"></i>
            {{ $t('common.download') }}
          </button>
          <div class="lang-dropdown">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </header>
    <div class="cv-container">
      <aside class="cv-left">
        <div class="profile-pic-container">
          <img src="/img/profile.jpg" alt="Profile">
        </div>
        <div class="sidebar-section-title"><i class="fa-solid fa-address-book"></i><span>{{ $t('common.contact')
            }}</span></div>
        <div class="cv-contact">
          <div class="cv-address-container"><i class="fa-solid fa-location-dot"></i>
            <div class="cv-address">{{ $t('common.address') }}</div>
          </div>
          <div class="cv-phone-container"><i class="fa-solid fa-phone"></i>
            <div class="cv-phone"><a :href="'tel:' + $t('common.phone')">{{ $t('common.phone') }}</a></div>
          </div>
          <div class="cv-email-container"><i class="fa-solid fa-envelope"></i>
            <div class="cv-email"><a :href="'mailto:gaetan.bacso@gmail.com'">{{ 'gaetan.bacso@gmail.com' }}</a></div>
          </div>
        </div>
        <div class="sidebar-section-title"><i class="fa-solid fa-link"></i><span>{{ $t('common.links') }}</span></div>
        <div class="cv-links">
          <div><i class="fab fa-linkedin"></i><a :href="$t('common.linkedin_url')" target="_blank">{{
            $t('common.linkedin') }}</a></div>
          <div><i class="fa-solid fa-globe"></i><a :href="$t('common.portfolio_url')" target="_blank">{{
            $t('common.portfolio') }}</a></div>
        </div>
        <div class="sidebar-section-title"><i class="fa-solid fa-star-half-stroke"></i><span>{{ $t('common.interests')
            }}</span></div>
        <div class="cv-interests">
          <ul>
            <li v-for="interest in $tm('interests')" :key="interest">{{ interest }}</li>
          </ul>
        </div>
      </aside>
      <section class="cv-right">
        <section class="cv-section">
          <h2><i class="fa-solid fa-id-badge"></i><span>{{ $t('about_title') }}</span></h2>
          <div class="about">{{ $t('about_text') }}</div>
        </section>
        <section class="cv-section">
          <h2><i class="fa-solid fa-briefcase"></i><span>{{ $t('experience_title') }}</span></h2>
          <div class="cv-timeline">
            <TimelineItem tKey="experiences" />
          </div>
        </section>
        <section class="cv-section">
          <h2><i class="fa-solid fa-graduation-cap"></i><span>{{ $t('education_title') }}</span></h2>
          <div class="cv-timeline">
            <TimelineItem tKey="educations" />
          </div>
        </section>
        <section class="cv-section">
          <h2><i class="fa-solid fa-cogs"></i><span>{{ $t('skills_title') }}</span></h2>
          <SkillBadges />
        </section>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TimelineItem from './components/TimelineItem.vue'
import SkillBadges from './components/SkillBadges.vue'
import LanguageDropdown from './components/LanguageDropdown.vue'

const { locale } = useI18n();
const dropdownOpen = ref(false)

function downloadPDF() {
  const lang = locale.value
  window.open(lang === 'fr' ? '/pdf/resume_fr.pdf' : '/pdf/resume_en.pdf', '_blank')
}

window.onclick = () => { dropdownOpen.value = false }
</script>