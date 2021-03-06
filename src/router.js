import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('Index'), name: 'Index' },
    { path: '/u/:username?', component: load('User'), name: 'User' },
    { path: '/t/:teamname?', component: load('Team'), name: 'Team' },
    { path: '/leaderboards/', component: load('Leaderboards'), name: 'Leaderboards' },
    { path: '/device/:deviceId?', component: load('Device'), name: 'Device' },
    { path: '/local', component: load('Bus'), name: 'Local' },
    { path: '/auth/', component: load('Auth'), name: 'Auth' },
    { path: '*', component: load('Index') } // Not found
  ]
})
