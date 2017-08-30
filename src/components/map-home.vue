<style lang="scss" scoped="">
    .map-home{display: inline-block;float: right;}
    .map-home div{width: 100%;height:100%;}
</style>
<template>
    <a class="map-home" href="http://10.77.4.80:3000/map" :style="{width:mapWidth,height:mapHeight}"><div class="" ref="mapChart"></div></a>
</template>
<script type="text/javascript">
    import echarts from 'echarts'
    export default {
      props: ['mapWidth', 'mapHeight'],
      data () {
        return {
          rangeCode: '000001.SH'
        }
      },
      watch: {

      },
      computed: {
        homeMapData: function () {
          const map = [].concat(this.$store.state.stockMap.industries)
          map.forEach(function (industry) {
            industry.value = industry.scale
            industry.children && industry.children.forEach(function (lvl2) {
              lvl2.value = lvl2.scale
              lvl2.children = []
            })
          })
          return map
        }
      },
      methods: {
        initMap: function () {
          this.mapChart = echarts.init(this.$refs.mapChart)
          this.$store.dispatch('stockMap/queryRangeByCode', { code: this.rangeCode })
                    .then(() => {
                      this.mapChart.setOption({
                        tooltip: {
                          triggerOn: 'none'
                        },
                        series: [
                          {
                            name: '',
                            type: 'treemap',
                            width: '100%',
                            height: '100%',
                            label: {
                              normal: {
                                show: true,
                                            /* formatter: function (params) {
                                             if (typeof (params.data.perf) !== 'undefined' && params.data.perf !== null) {
                                             return params.name + '\n' + params.data.perfText
                                             }
                                             },*/
                                textStyle: {
                                  fontSize: 14,
                                  ellipsis: false
                                }
                              }
                            },
                            breadcrumb: {
                              show: false
                            },
                            nodeClick: false,
                            roam: false,
                            levels: this.getLevelOption(),
                            data: this.homeMapData
                          }
                        ]
                      })
                      this.mapChart.hideLoading()
                    })
        },
        getLevelOption: function () {
          return [
            {// 第一层外
              itemStyle: {
                normal: {
                  borderColor: '#000',
                  borderWidth: 1,
                  gapWidth: 5
                }
              },
              upperLabel: {
                normal: {
                  show: false
                }
              }
            },
            {// 第一层
              itemStyle: {
                normal: {
                  borderColor: '#000',
                  borderWidth: 0,
                  gapWidth: 1
                }
              }
            },
            {// 第二层
              itemStyle: {
                normal: {
                  borderWidth: 0,
                  gapWidth: 0
                                // borderColor: '#000'
                }
              },
              upperLabel: {
                normal: {
                  offset: [5, 0],
                  textStyle: {
                    ellipsis: false
                  }
                }
              }
            }
          ]
        }
      },
      mounted () {
        this.initMap()
      }
    }
</script>
