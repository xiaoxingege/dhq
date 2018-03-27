<style lang="scss" scoped>
@import '../assets/css/reset.css';
.projects-list {
    width: 100%;
    font-size: 14px;
}
.btn {
  padding: 0 6px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  display: inline-block;
  box-sizing: border-box;
}

.btn.btn-default {
  color: #666;
  border: 1px solid #ccc;
}

.btn.btn-default:hover {
  background: #efefef;
}
.user-manage-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,.3);
}
.user-manage-panel {
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 500px;
    z-index: 1;
    background: white;
    margin-left: -200px;
    margin-top: -250px;
    .head {
        padding: 16px 10px;
    }
    .text_input {
        width: 240px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 3px;
        outline: 0;
        padding: 0 5px;
    }
}
.list-panel {
    padding: 0 10px;
    li {
        height: 30px;
        line-height: 30px;
        padding: 0 0 0 10px;
        margin-top: 20px;
        .btn {
            float: right;
        }
        &:after {
            content: ' ';
            display: block;
            clear: both;
        }
        &:hover {
            background: rgba(0,0,0,.05);
        }
    }
}
</style>
<template>
<div>
  <div class="opt-panel">
    <a class="btn btn-default" href="javascript:;" @click="openUserManager">人员管理</a>
  </div>
  <div class="projects-list" ref="panel" :style="{height:height+ 'px'}">
    Loading...
  </div>
  <div v-if="showUserManager" class="user-manage-bg" @click="closeUserManager">
    <div class="user-manage-panel" @click.stop>
      <div class="head">
        <input class="text_input" ref="username" @input="delaySearchUser" />
        <a class="btn btn-default" href="javascript:;" @click="searchUser">查询</a>
        <a class="btn btn-default" href="javascript:;" @click="addUser">添加人员</a>
      </div>
      <div class="list-panel">
        <ul v-for="user of users">
          <li>
            {{user.name}}
            <a class="btn btn-default" href="javascript:;" @click="delUser(user._id)">删除</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import moment from 'moment'
import cookie from 'component-cookie'

export default {
  props: ['nickname'],
  data() {
    return {
      height: 0,
      showUserManager: false
    }
  },
  computed: mapState({
    projects: state => state.projects.list,
    users: state => state.projects.users
  }),
  components: {},
  methods: {
    addUser() {
      let name = this.$refs.username.value
      if (!name) {
        return alert('请输入要添加的用户名')
      }
      this.$store.dispatch('projects/addUser', {
        name
      }).then(() => {
        return this.$store.dispatch('projects/fetchUsers', {
          limit: 10
        })
      }).then(() => {
        this.$store.dispatch('projects/fetch', {
          nickname: this.nickname
        })
      })
    },
    delUser(id) {
      this.$store.dispatch('projects/delUser', {
        id
      }).then(() => {
        return this.$store.dispatch('projects/fetchUsers', {
          limit: 10
        })
      }).then(() => {
        this.$store.dispatch('projects/fetch', {
          nickname: this.nickname
        })
      })
    },
    delaySearchUser() {
      clearTimeout(this._timer)
      this._timer = setTimeout(this.searchUser.bind(this), 500)
    },
    searchUser() {
      let name = this.$refs.username.value
      if (!name) {
        return this.$store.dispatch('projects/fetchUsers', {
          limit: 10
        })
      } else {
        return this.$store.dispatch('projects/fetchUsers', {
          where: JSON.stringify({
            name: {
              $regex: name
            }
          }),
          limit: 10
        })
      }
    },
    openUserManager() {
      this.showUserManager = true
    },
    closeUserManager() {
      this.showUserManager = false
    }
  },
  mounted() {
    let team = this.$route.query.team
    if (team) {
      cookie('_p_team', team, {
        path: '/',
        maxage: 1000 * 3600 * 24 * 30
      })
    }
    const echarts = require('echarts')
    let chart = null
    const today = moment().startOf('day')
    this.$watch('projects', projects => {
      let min = today
      if (chart) {
        chart.dispose()
      }
      const usernames = []
      projects.forEach(prj => {
        prj = prj.fields
        if (prj.assignee) {
          if (usernames.indexOf(prj.assignee.displayName) === -1) {
            usernames.push(prj.assignee.displayName)
          }
        } else {
          if (usernames.indexOf('未分配') === -1) {
            usernames.push('未分配')
          }
        }
        const start = moment(prj.customfield_10900).startOf('day')
        if (start < min) {
          min = start
        }
      })
      this.height = 200 + ((this.nickname ? projects : usernames) || []).length * 30
      setTimeout(() => {
        chart = echarts.init(this.$refs.panel)
        chart.on('click', params => {
          if (!this.nickname) {
            const nickname = params.value[1]
            this.$router.push(`/demo/projects/${nickname}${location.search}`)
          } else {
            let prj = projects.filter(prj => {
              return params.value[1] === prj.fields.summary
            })[0]
            location.href = `http://jira2.jrj.com.cn/browse/${prj.key}`
          }
        })

        const series = []
        // 把短线放在上面，避免被长线遮挡住
        projects.concat([]).sort((a, b) => {
          a = a.fields
          b = b.fields
          const startA = moment(a.customfield_10900).startOf('day')
          const endA = moment(a.customfield_10613).endOf('day')
          const startB = moment(b.customfield_10900).startOf('day')
          const endB = moment(b.customfield_10613).endOf('day')
          return -((endA - startA) - (endB - startB))
        }).forEach(prj => {
          prj = prj.fields
          const seriesLabel = {
            normal: {
              show: true,
              textBorderColor: '#333',
              textBorderWidth: 2,
              formatter: parseFloat(prj.aggregatetimeoriginalestimate / 3600 / 8).toFixed(1)
            }
          }
          const start = moment(prj.customfield_10900).startOf('day')
          const end = moment(prj.customfield_10613).endOf('day')
          const username = prj.assignee ? prj.assignee.displayName : '未分配'
          if (start > min) {
            // 占位条都放在最前面，避免遮挡可见条
            series.unshift({
              type: 'bar',
              barGap: '0%',
              stack: prj.summary,
              itemStyle: {
                normal: {
                  opacity: 0
                },
                emphasis: {
                  opacity: 0
                }
              },
              data: [
                [start.toDate(), username]
              ]
            })
          }
          series.push({
            type: 'bar',
            barGap: '-100%',
            stack: prj.summary,
            itemStyle: {
              normal: {
                opacity: 0.8
              },
              emphasis: {
                opacity: 0.8
              }
            },
            name: prj.summary,
            data: [
              [end.toDate(), this.nickname ? prj.summary : username]
            ],
            label: seriesLabel,
            markLine: {
              data: [{
                name: 'Y 轴值为 100 的水平线',
                xAxis: today.toDate(),
                lineStyle: {
                  normal: {
                    type: 'solid'
                  }
                },
                label: {
                  normal: {
                    formatter() {
                      return '今天'
                    }
                  }
                }
              }]
            }
          })
        })
        chart.setOption({
          // title: {
          //   text: '人员分配情况',
          //   subtext: this.nickname
          // },
          tooltip: {
            trigger: 'item',
            formatter: (params) => {
              if (params.seriesName !== ' -') {
                const prj = projects.filter((prj) => {
                  prj = prj.fields
                  return prj.summary === params.seriesName
                })[0].fields
                return `${params.seriesName}: ${moment(prj.customfield_10900).format('YYYY/MM/DD')} - ${moment(prj.customfield_10613).format('YYYY/MM/DD')} (${prj.status.name})`
              }
            },
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'time',
            min: this.nickname ? min.toDate() : min.toDate()
          },
          yAxis: {
            type: 'category',
            data: (this.nickname ? projects.map(prj => prj.fields.summary) : usernames).reverse()
          },
          series: series
        })
      })
    })
    this.$watch('nickname', () => {
      this.$store.dispatch('projects/fetch', {
        nickname: this.nickname
      })
    })
    this.$store.dispatch('projects/fetch', {
      nickname: this.nickname
    })
    this.$store.dispatch('projects/fetchUsers', {
      limit: 10
    })
  }
}
</script>
