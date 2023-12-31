<script setup lang='ts'>

import ProjectContentTitle from '@/modules/project/components/register-component/ProjectContentTitle.vue'
import GuideBox from '@/modules/project/components/register-component/GuideBox.vue'
import SaveButton from '@/modules/project/components/buttons/SaveButton.vue'
import { computed, ref } from 'vue'
import { useProjectStoryStore } from '@/store/registerProjectStore'
import { getPresignedUrlByImageName } from '@/services/api/ProjectService'
import { useRouter } from 'vue-router'
import type { ProjectImagesType, Story } from '@/services/types/ProjectRegisterType'

const projectContentTitle = {
  title: '스토리 작성',
  description: '메이커님의 프로젝트를 소개해 주세요'
}
const guide = {
  title: '소개 사진 등록 가이드',
  description: [
    '프로젝트 상세페이지 최상단에 노출할 사진을 등록해 주세요',
    '10MB 이하의 JPG, JPEG, PNG 파일',
    '최대 4장까지 등록 가능'
  ]
}
const storyImage = {
  title: '스토리 이미지 등록 가이드',
  description: [
    '프로젝트에 대한 상세 설명을 등록해 주세요.',
    '10MB 이하의 JPG, JPEG, PNG 파일'
  ]
}
// const projectStory = ref({
//   projectImages: Array<ProjectImagesType>,
//   projectDescription: '',
//   projectStoryImageUrl: ''
// })
const projectStory = ref<Story>({
  projectImages: [],
  projectDescription: '',
  projectStoryImageUrl: '',
  projectStoryImageFile: null
})
const inputFile = ref()
const addImage = () => {
  inputFile.value.click()
}
const imageInput = async (event: any) => {
  const file = event.target.files[0]
  const url = await getPresignedUrlByImageName(file)
  const projectImages: ProjectImagesType = {
    projectImageFile: file,
    projectImageUrl: url
  }
  projectStory.value.projectImages.push(projectImages)
  // projectStory.value.projectImages.push(projectImages)
}

const storyDescription = (value: any) => {
  projectStory.value.projectDescription = value.target.value
}
const router = useRouter()
const emitData = () => {
  useProjectStoryStore().setProjectStoryData({ projectStoryData: projectStory })
  router.push('/projects/products')
}
const makeDisable = computed(() => {
  if (projectStory.value.projectImages.length == 4)
    return { background: 'gray' }
})
const storyImg = ref()
const addStoryImg = () => {
  storyImg.value.click()
}
const storyImgInput = async (event: any) => {
  const file = event.target.files[0]
  projectStory.value.projectStoryImageFile = file
  projectStory.value.projectStoryImageUrl = await getPresignedUrlByImageName(file)
}
</script>

<template>
  <ProjectContentTitle :title='projectContentTitle' />
  <div class='project-content-box'>
    <div class='title'>
      <div class='text'>프로젝트 소개 사진 등록</div>
    </div>
    <GuideBox :guide-content='guide' />
    <div class='camera-btn' @click='addImage'>
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' width='46' height='41' viewBox='0 0 46 41' fill='none'>
          <path
            d='M40.5234 5.34375H34.1132L30.9492 0.594493C30.827 0.411331 30.6614 0.261213 30.4672 0.157495C30.273 0.0537772 30.0561 -0.000324904 29.8359 1.46791e-06H15.5859C15.3658 -0.000324904 15.1489 0.0537772 14.9547 0.157495C14.7604 0.261213 14.5949 0.411331 14.4727 0.594493L11.3065 5.34375H4.89844C3.59929 5.34375 2.35335 5.85983 1.43472 6.77847C0.516084 7.69711 0 8.94304 0 10.2422V35.1797C0 36.4788 0.516084 37.7248 1.43472 38.6434C2.35335 39.562 3.59929 40.0781 4.89844 40.0781H40.5234C41.8226 40.0781 43.0685 39.562 43.9872 38.6434C44.9058 37.7248 45.4219 36.4788 45.4219 35.1797V10.2422C45.4219 8.94304 44.9058 7.69711 43.9872 6.77847C43.0685 5.85983 41.8226 5.34375 40.5234 5.34375ZM42.75 35.1797C42.75 35.7702 42.5154 36.3365 42.0979 36.7541C41.6803 37.1717 41.114 37.4062 40.5234 37.4062H4.89844C4.30792 37.4062 3.74158 37.1717 3.32402 36.7541C2.90646 36.3365 2.67188 35.7702 2.67188 35.1797V10.2422C2.67188 9.65167 2.90646 9.08533 3.32402 8.66777C3.74158 8.25021 4.30792 8.01563 4.89844 8.01563H12.0234C12.2436 8.01595 12.4605 7.96185 12.6547 7.85813C12.8489 7.75441 13.0145 7.6043 13.1367 7.42113L16.3007 2.67188H29.119L32.2852 7.42113C32.4074 7.6043 32.5729 7.75441 32.7672 7.85813C32.9614 7.96185 33.1782 8.01595 33.3984 8.01563H40.5234C41.114 8.01563 41.6803 8.25021 42.0979 8.66777C42.5154 9.08533 42.75 9.65167 42.75 10.2422V35.1797ZM22.7109 12.4688C20.8614 12.4688 19.0533 13.0172 17.5155 14.0448C15.9776 15.0723 14.779 16.5329 14.0712 18.2416C13.3634 19.9504 13.1782 21.8307 13.5391 23.6447C13.8999 25.4587 14.7905 27.125 16.0984 28.4329C17.4062 29.7407 19.0725 30.6314 20.8865 30.9922C22.7006 31.353 24.5809 31.1678 26.2896 30.46C27.9984 29.7522 29.4589 28.5536 30.4865 27.0158C31.514 25.4779 32.0625 23.6699 32.0625 21.8203C32.0625 19.3401 31.0772 16.9615 29.3235 15.2078C27.5697 13.454 25.1911 12.4688 22.7109 12.4688ZM22.7109 28.5C21.3898 28.5 20.0984 28.1082 18.9999 27.3743C17.9014 26.6403 17.0453 25.5971 16.5397 24.3765C16.0341 23.156 15.9019 21.8129 16.1596 20.5172C16.4173 19.2214 17.0535 18.0312 17.9877 17.0971C18.9219 16.1629 20.1121 15.5267 21.4078 15.269C22.7035 15.0112 24.0466 15.1435 25.2671 15.6491C26.4877 16.1547 27.5309 17.0108 28.2649 18.1093C28.9989 19.2077 29.3906 20.4992 29.3906 21.8203C29.3906 23.5919 28.6869 25.2909 27.4342 26.5436C26.1815 27.7963 24.4825 28.5 22.7109 28.5Z'
            fill='#878787' />
        </svg>
        <div class='number-of-count'>
          <div class='box'>
            <div class='text'>{{ projectStory.projectImages.length }}/4</div>
          </div>
        </div>
      </div>
    </div>
    <input ref='inputFile' style='display: none' type='file' @change='imageInput'
           v-if='projectStory.projectImages.length < 4' :style='makeDisable'>
  </div>
  <div class='project-content-box'>
    <div class='title'>
      <div class='text'>프로젝트 상세 설명</div>
    </div>
    <textarea class='project-detail' name='description' id='projectDetail' cols='30' rows='10'
              @input='storyDescription'
              placeholder='내용을 입력해 주세요.'></textarea>
  </div>
  <div class='project-content-box'>
    <div class='title'>
      <div class='text'>프로젝트 스토리 이미지 등록</div>
    </div>
    <GuideBox :guide-content='storyImage' />
    <div class='camera-btn' @click='addStoryImg'>
      <svg xmlns='http://www.w3.org/2000/svg' width='46' height='41' viewBox='0 0 46 41' fill='none'>
        <path
          d='M40.5234 5.34375H34.1132L30.9492 0.594493C30.827 0.411331 30.6614 0.261213 30.4672 0.157495C30.273 0.0537772 30.0561 -0.000324904 29.8359 1.46791e-06H15.5859C15.3658 -0.000324904 15.1489 0.0537772 14.9547 0.157495C14.7604 0.261213 14.5949 0.411331 14.4727 0.594493L11.3065 5.34375H4.89844C3.59929 5.34375 2.35335 5.85983 1.43472 6.77847C0.516084 7.69711 0 8.94304 0 10.2422V35.1797C0 36.4788 0.516084 37.7248 1.43472 38.6434C2.35335 39.562 3.59929 40.0781 4.89844 40.0781H40.5234C41.8226 40.0781 43.0685 39.562 43.9872 38.6434C44.9058 37.7248 45.4219 36.4788 45.4219 35.1797V10.2422C45.4219 8.94304 44.9058 7.69711 43.9872 6.77847C43.0685 5.85983 41.8226 5.34375 40.5234 5.34375ZM42.75 35.1797C42.75 35.7702 42.5154 36.3365 42.0979 36.7541C41.6803 37.1717 41.114 37.4062 40.5234 37.4062H4.89844C4.30792 37.4062 3.74158 37.1717 3.32402 36.7541C2.90646 36.3365 2.67188 35.7702 2.67188 35.1797V10.2422C2.67188 9.65167 2.90646 9.08533 3.32402 8.66777C3.74158 8.25021 4.30792 8.01563 4.89844 8.01563H12.0234C12.2436 8.01595 12.4605 7.96185 12.6547 7.85813C12.8489 7.75441 13.0145 7.6043 13.1367 7.42113L16.3007 2.67188H29.119L32.2852 7.42113C32.4074 7.6043 32.5729 7.75441 32.7672 7.85813C32.9614 7.96185 33.1782 8.01595 33.3984 8.01563H40.5234C41.114 8.01563 41.6803 8.25021 42.0979 8.66777C42.5154 9.08533 42.75 9.65167 42.75 10.2422V35.1797ZM22.7109 12.4688C20.8614 12.4688 19.0533 13.0172 17.5155 14.0448C15.9776 15.0723 14.779 16.5329 14.0712 18.2416C13.3634 19.9504 13.1782 21.8307 13.5391 23.6447C13.8999 25.4587 14.7905 27.125 16.0984 28.4329C17.4062 29.7407 19.0725 30.6314 20.8865 30.9922C22.7006 31.353 24.5809 31.1678 26.2896 30.46C27.9984 29.7522 29.4589 28.5536 30.4865 27.0158C31.514 25.4779 32.0625 23.6699 32.0625 21.8203C32.0625 19.3401 31.0772 16.9615 29.3235 15.2078C27.5697 13.454 25.1911 12.4688 22.7109 12.4688ZM22.7109 28.5C21.3898 28.5 20.0984 28.1082 18.9999 27.3743C17.9014 26.6403 17.0453 25.5971 16.5397 24.3765C16.0341 23.156 15.9019 21.8129 16.1596 20.5172C16.4173 19.2214 17.0535 18.0312 17.9877 17.0971C18.9219 16.1629 20.1121 15.5267 21.4078 15.269C22.7035 15.0112 24.0466 15.1435 25.2671 15.6491C26.4877 16.1547 27.5309 17.0108 28.2649 18.1093C28.9989 19.2077 29.3906 20.4992 29.3906 21.8203C29.3906 23.5919 28.6869 25.2909 27.4342 26.5436C26.1815 27.7963 24.4825 28.5 22.7109 28.5Z'
          fill='#878787' />
      </svg>
    </div>
    <input ref='storyImg' @change='storyImgInput' type='file' style='display: none'>
  </div>
  <SaveButton @click='emitData' />
</template>

<style scoped>
@import "@/assets/css/projectregister/projectContentItem.css";
@import "@/assets/css/projectregister/ProjectStory.css";
</style>