<template>
  <div>
    <div id='header-signup'><a href='/' @click='preworkBeforeGo'>롯디즈</a></div>
    <div id='progress-bar-signup'>
      <div class='icon-wrapper'>
        <font-awesome-icon :icon="['far', 'square-check']" class='increase-icon-size'
                           :class="{ 'isActive': getActiveNo() === 1 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 1}">약관동의</span>
        </div>
      </div>
      <div class='icon-wrapper'>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class='icon-wrapper'>
        <font-awesome-icon :icon="['fas', 'user-pen']" class='increase-icon-size'
                           :class="{ 'isActive': getActiveNo() === 2 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 2}">기본정보입력</span>
        </div>
      </div>
      <div class='icon-wrapper'>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class='icon-wrapper'>
        <font-awesome-icon :icon="['fas', 'envelope-circle-check']" class='increase-icon-size'
                           :class="{ 'isActive': getActiveNo() === 3 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 3}">이메일인증</span>
        </div>
      </div>
      <div class='icon-wrapper'>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class='icon-wrapper'>
        <font-awesome-icon :icon="['fas', 'file-circle-check']" class='increase-icon-size'
                           :class="{ 'isActive': getActiveNo() === 4 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 4}">가입완료</span>
        </div>
      </div>
    </div>
    <div id='contents-signup'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useMemberStore } from '@/modules/stores/member'
import { useHeaderStore } from '@/stores/headerStore'
import router from '@/router'

const memberStore = useMemberStore()
const headerStore = useHeaderStore()

const preworkBeforeGo = (event: any) => {
  event.preventDefault()
  headerStore.assignIsNoHeaderPath(false)
  router.push('/')
}

const getActiveNo = () => {
  return memberStore.getActiveNo()
}

if (window.location.pathname === '/member/sign-up/basic-info') {
  window.location.pathname = '/member/sign-up'
}

if (window.location.pathname === '/member/sign-up/email-auth') {
  window.location.pathname = '/member/sign-up'
}

if (window.location.pathname === '/member/sign-up/success') {
  window.location.pathname = '/member/sign-up'
}
</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/sign-up-common.css';
@import '@/assets/css/member/sign-up.css';
</style>