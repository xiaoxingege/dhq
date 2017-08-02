<template>
  <div class="map">
      <div>
          <select v-model="rangeCode" @change="updateMap">
              <option value="all">全部A股</option>
              <option value="000001.SH">上证A股</option>
              <option value="399001.SZ">深证A股</option>
              <option value="mainSH">上交所主板</option>
              <option value="mainSZ">深交所主板</option>
              <option value="399006.SZ">中小板</option>
              <option value="399005.SZ">创业板</option>
          </select>
      </div>
      <div class="chart" ref="treemap"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default{
    data () {
      return {
        rangeCode: 'all'
      }
    },
    watch: {
      echartOpt: function () {
        this.chart.setOption(this.echartOpt)
      }
    },
    computed: {
      mapData: function () {
        const map = [].concat(this.$store.state.stockMap.industries)
        map.forEach(function (industry) {
          industry.value = industry.scale
          industry.children && industry.children.forEach(function (lvl2) {
            lvl2.value = lvl2.scale
            lvl2.children && lvl2.children.forEach(function (stock) {
              stock.value = stock.scale
            })
          })
        })
        return map
      }
    },
    methods: {
      initMap: function () {
        this.chart = echarts.init(this.$refs.treemap)
        this.$store.dispatch('stockMap/queryRangeByCode', { code: this.rangeCode })
                    .then(() => {
                      this.chart.setOption({
                        series: [
                          {
                            name: '',
                            type: 'treemap',
                            visibleMin: 300,
                            label: {
                              show: true,
                              formatter: '{b}'
                            },
                            upperLabel: {
                              normal: {
                                show: true,
                                height: 30
                              }
                            },
                            itemStyle: {
                              normal: {
                                borderColor: '#fff'
                              }
                            },
                            levels: [
                              {
                                itemStyle: {
                                  normal: {
                                    borderColor: '#777',
                                    borderWidth: 0,
                                    gapWidth: 1
                                  }
                                },
                                upperLabel: {
                                  normal: {
                                    show: false
                                  }
                                }
                              },
                              {
                                itemStyle: {
                                  normal: {
                                    borderColor: '#555',
                                    borderWidth: 5,
                                    gapWidth: 1
                                  },
                                  emphasis: {
                                    borderColor: '#ddd'
                                  }
                                }
                              },
                              {
                                colorSaturation: [0.35, 0.5],
                                itemStyle: {
                                  normal: {
                                    borderWidth: 5,
                                    gapWidth: 1,
                                    borderColorSaturation: 0.6
                                  }
                                }
                              }
                            ],
                            data: this.mapData
                          }
                        ]
                      })
                      this.chart.hideLoading()
                    })
        this.chart.showLoading()
      },
      updateMap: function () {
        this.$store.dispatch('stockMap/queryRangeByCode', { code: this.rangeCode }).then(() => {
          this.chart && this.chart.setOption({ series: [{ data: this.mapData }] })
        })
      },
      updateData: function () {

      }
    },
    mounted () {
      this.initMap()
    }
  }
</script>

<style>
.chart{width:800px;height:600px;}
</style>
