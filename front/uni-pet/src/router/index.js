import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import Mypage from "@/pages/MyPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import HospitalInfoPage from "@/pages/HospitalInfoPage.vue";
import TrailInfoPage from "@/pages/TrailInfoPage.vue";
import AnimalListPage from "@/pages/AnimalListPage.vue";
import AnimalListDetailPage from "@/pages/AnimalListDetailPage.vue";
import BoardListPage from "@/pages/BoardListPage.vue";
import BoardWritePage from '@/pages/BoardWritePage.vue';

const index = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignupPage },
    { path: "/hospinfo", component: HospitalInfoPage },
    { path: "/trailinfo", component: TrailInfoPage },
    { path: "/mypage", component: Mypage },
    { path: "/myprofile", component: Mypage },
    { path: "/mypet", component: Mypage },
    { path: "/mywriting", component: Mypage },
    { path: "/myshare", component: Mypage },
    { path: "/mysharelikes", component: Mypage },
    { path: "/animalList", component: AnimalListPage },
    { path: "/animals/:id", component: AnimalListDetailPage, props: true },
    { path: "/board/list", component: BoardListPage },
    { path: "/write", component: BoardWritePage },
  ],
});

export default index;
