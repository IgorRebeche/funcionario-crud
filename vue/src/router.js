import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/user/Edit';
import SearchComponent from '@/components/user/Search';
import CreateComponent from '@/components/user/Create';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    // { path: '/search', name: 'Search', component: SearchComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
  ]
});