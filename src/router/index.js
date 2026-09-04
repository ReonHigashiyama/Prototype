import { createRouter, createWebHistory } from 'vue-router'

import BookListPage from '@/views/BookListPage.vue'
import BookRegisterPage from '@/views/BookRegisterPage.vue'

const routes = [
    { path: '/', redirect: '/books' },
    { path: '/books', component: BookListPage, name: 'book-list' },
    { path: '/books/new', component: BookRegisterPage, name: 'book-register' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
