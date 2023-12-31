import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ProjectListByCategoryView from '@/views/ProjectListByCategoryView.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'
import LotdealView from '@/views/LotdealView.vue'
import SpecialExhibitionView from '@/views/SpecialExhibitionView.vue'

import SupporterWithUsComponent from '@/modules/project/components/SupporterWithUsComponent.vue'
import SupportSignatureComponent from '@/modules/project/components/SupportSignatureComponent.vue'
import FundingView from '@/views/funding/FundingView.vue'
import FundingPayApproveView from '@/views/funding/FundingPayApproveView.vue'
import FundingDetailsView from '@/views/funding/FundingDetailsView.vue'

import ProjectRegisterView from '@/views/ProjectRegisterView.vue'
import DefaultInformation from '@/modules/project/components/register-component/DefaultInformation.vue'
import MakerRegister from '@/modules/project/components/register-component/MakerRegister.vue'
import ProjectInformation from '@/modules/project/components/register-component/ProjectInformation.vue'
import WriteStory from '@/modules/project/components/register-component/WriteStory.vue'
import RegisterProducts from '@/modules/project/components/register-component/RegisterProducts.vue'
import RegisteredProjects from '@/modules/maker/components/RegisteredProjects.vue'
import NotificationView from '@/views/NotificationView.vue'
import DetailOfProject from '@/modules/maker/components/DetailOfProject.vue'
import SelectLotdeal from '@/modules/project/components/register-component/SelectLotdeal.vue'
import { client } from '@/services/api/APISpec'
import ProjectImageSectionComponent from '@/modules/project/components/ProjectImageSectionComponent.vue'
import { useHeaderStore } from '@/stores/headerStore'
import type { AxiosError } from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/member/sign-in',
      name: 'member-sign-in',
      component: () => import('../views/member/SignIn.vue')
    },
    {
      path: '/member/sign-up',
      component: () => import('../views/member/SignUp.vue'),
      children: [
        {
          path: '',
          name: 'member-sign-up-agreement',
          component: () => import('../modules/member/components/SignUpAgreement.vue')
        },
        {
          path: 'basic-info',
          name: 'member-sign-up-basic-info',
          component: () => import('../modules/member/components/SignUpBasicInfo.vue')
        },
        {
          path: 'email-auth',
          name: 'member-sign-up-email-auth',
          component: () => import('../modules/member/components/SignUpEmailAuth.vue')
        },
        {
          path: 'success',
          name: 'member-sign-up-success',
          component: () => import('../modules/member/components/SignUpSuccess.vue')
        }
      ]
    },
    {
      path: '/member/my-page',
      component: () => import('../views/member/MyPage.vue'),
      children: [
        {
          path: '',
          name: 'my-page-supporter',
          component: () => import('../modules/member/components/MyPageSupporter.vue'),
          meta: { authRequired: true }
        },
        {
          path: 'maker',
          name: 'my-page-maker',
          component: RegisteredProjects,
          meta: { authRequired: true }
        },
        {
          path: 'change',
          name: 'my-page-info-change',
          component: () => import('../modules/member/components/MemberInfoChange.vue'),
          meta: { authRequired: true }
        },
        {
          path: 'projects/detail/:id',
          name: 'project-detail',
          component: DetailOfProject
        }
      ],
      meta: { authRequired: true }
    },
    {
      path: '/member/membership-honors',
      name: 'membership-honors',
      component: () => import('../views/member/MembershipPayments.vue'),
      meta: { authRequired: true }
    },
    {
      path: '/member/membership-honors/join/success',
      name: 'membership-honors-join',
      component: () => import('../modules/member/components/MembershipPaymentsCompleted.vue'),
      meta: { authRequired: true }
    },
    {
      path: '/member/likes-list',
      name: 'member-likes-list',
      component: () => import('../views/member/LikesList.vue'),
      meta: { authRequired: true }
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationView,
      meta: { authRequired: true }
    },
    {
      path: '/projects/category',
      name: 'projectListByCategory',
      component: ProjectListByCategoryView
    },
    {
      path: '/projects/details',
      name: 'projectDetails',
      component: ProjectDetailsView
    },
    {
      path: '/lotdeal',
      name: 'lotdeal',
      component: LotdealView
    },
    {
      path: '/special-exhibition/camping',
      name: 'specialExhibition',
      component: SpecialExhibitionView
    },
    {
      path: '/project-details/:id',
      name: 'projectDetails',
      component: ProjectDetailsView,
      children: [
        {
          path: '',
          name: 'projectStory',
          component: ProjectImageSectionComponent
        },
        {
          path: 'support-signature',
          component: SupportSignatureComponent
        },
        {
          path: 'supporter-with-us',
          component: SupporterWithUsComponent
        }
      ]
    },
    // {
    //   path: '/funding',
    //   name: 'funding',
    //   component: FundingView,
    //   meta: { authRequired: true }
    // },
    // {
    //   path: '/payments/approve/:order/:user',
    //   name: 'payments',
    //   component: FundingPayApproveView,
    //   meta: { authRequired: true }
    // },
    // {
    //   path: '/funding/details',
    //   name: 'fundingDetails',
    //   component: FundingDetailsView,
    //   meta: { authRequired: true }
    // },
    {
      path: '/projects',
      redirect: '/projects/maker'
    },
    {
      path: '/projects',
      name: 'projectRegister',
      component: ProjectRegisterView,
      children: [
        {
          path: 'basic-information',
          component: DefaultInformation
        },
        {
          path: 'maker',
          component: MakerRegister
        },
        {
          path: 'project-info',
          component: ProjectInformation
        },
        {
          path: 'story',
          component: WriteStory
        },
        {
          path: 'products',
          component: RegisterProducts
        },
        {
          path: 'lotdeal',
          component: SelectLotdeal
        }
      ],
      meta: { authRequired: true }
    }
  ]
})
router.beforeEach(async (to, from, next) => {

  if (window.location.pathname == '/member/sign-in' || window.location.pathname == '/member/sign-up') {
    const headerStore = useHeaderStore()
    headerStore.assignIsNoHeaderPath(true)
  }

  const jwtToken = localStorage.getItem('jwtToken')

  if (jwtToken !== null) {
    client.interceptors.request.use((config) => {
      config.headers.setAuthorization(jwtToken)
      return config
    }, (error) => Promise.reject(error))
  }

  if (to.matched.some(record => record.meta.authRequired)) {
    if (jwtToken === null) {
      alert('로그인이 필요한 페이지 입니다.')
      return next({
        path: '/member/sign-in',
        query: { redirect: to.fullPath }
      })
    } else {
      client.interceptors.response.use((response) => {
        return response
      }, (error) => {
        if (error.isAxiosError) {
          const axiosError: AxiosError = error as AxiosError
          if (axiosError.response?.status === 401 || axiosError.response?.status === 403) {
            localStorage.removeItem('jwtToken')
            location.reload()
          }
        }
      })
    }
  }
  next()
})

export default router
