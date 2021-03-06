import { GraphQLClient } from 'graphql-request'
import EventEmitter from 'event-emitter'
import m from 'gql/mutations.js'
import q from 'gql/queries.js'

var events = new EventEmitter()

var gqlEndpoint = 'https://api.graph.cool/simple/v1/boid'
var client = {}

function setupClient (token) {
  if (token) {
    client = new GraphQLClient(gqlEndpoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  else {
    client = new GraphQLClient(gqlEndpoint)
  }
}
setupClient()

var api = {
  events,
  init () {
    // if (window.local) {
    //   console.log('need local token')
    //   var token = window.local.ipcRenderer.sendSync('getTokenSync')
    //   if (token) return true
    //   else return false
    // }
    // else {
    if (JSON.parse(window.localStorage.getItem('rememberMe'))) {
      setupClient(window.localStorage.getItem('token'))
      return true
    }
    else {
      return false
    }
    // }
  },
  auth: {
    login: async function (formData) {
      console.log(formData)
      try {
        var result = (await client.request(m.auth.authenticateUser(), formData)).authenticateUser
        console.log(result)

        setupClient(result.token)

        window.localStorage.setItem('token', result.token)
        window.localStorage.setItem('id', result.id)

        return result
      }
      catch (err) {
        // console.log(err.response.errors[0].functionError)
        return {
          error: err.response.errors[0].functionError
        }
      }
    },
    logout () {
      localStorage.clear()
      setupClient()
    },
    authenticateUser: async function (formData) {
      try {
        console.log('formData', formData)
        var result = (await client.request(m.auth.signupUser(), formData)).signupUser
        console.log(result)
        setupClient(result.token)
        if (JSON.parse(window.localStorage.getItem('rememberMe'))) {
          window.localStorage.setItem('token', result.token)
          window.localStorage.setItem('id', result.id)
        }
        return result
      }
      catch (err) {
        console.log(err.response)
        if (err.response) {
          return {
            error: err.response.errors[0].functionError
          }
        }
      }
    }
  },
  user: {
    get: async function (userId) {
      var result = (await client.request(q.user.get(), { userId })).User
      // console.log('get user', result)
      if (window.local) window.local.thisUser = result
      events.emit('thisUser', result)
      return result
    },
    getByUsername: async function (username) {
      // console.log('get user', userId)
      var result = (await client.request(q.user.getByUsername(), { username })).User
      // events.emit('thisUser', result)
      return result
    },
    checkValidUsername: async function (username) {
      var result = (await client.request(q.user.checkUsername(), { username }).catch(console.log)).User
      if (result) {
        return true
      }
      else return false
    },
    updateProfile: async function (params) {
      var result = await client.request(m.user.updateProfile(), params).catch(console.log)
      return result
    }
  },
  device: {
    get: async function (deviceId) {
      var result = (await client.request(q.device.get(), {
        deviceId
      })).Device
      // console.log(result)
      // location.reload()
      // events.emit('thisUser', result)
      return result
    },
    getByCpid: async function (cpid) {
      var result = await client.request(q.device.getByCpid(), {
        cpid
      })
      return result.Device
    },
    updateStatus: async function (device) {
      // console.log('apiDevice', device)
      var result = (await client.request(m.device.updateStatus(), device)).updateDevice
      // console.log(result)
      // location.reload()
      // events.emit('thisUser', result)
      return result
    },
    updateWcgid: async function (device) {
      // console.log('UPDATE WCGID',device)
      var result = (await client.request(m.device.updateWcgid(), device)).updateDevice

      return result
    },
    create: async function (deviceData) {
      var result = await client.request(m.device.create(), deviceData)
      console.log(JSON.stringify(result))
      return result.createDevice
    }
  },
  leaderboard: {
    global: async function (teamId) {
      return (await client.request(q.leaderboard.global(), { teamId: teamId })).leaderboard.users
    },
    teams: async function (teamId) {
      return (await client.request(q.leaderboard.teams())).allTeams
    }
  },
  team: {
    getByName: async function (teamName) {
      return (await client.request(q.team.getByName(), { teamName })).Team
    }
  }
}

// export default new Vue({
//   data () {
//     return {}
//   }
// })
export default api
