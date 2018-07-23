<template>
    <div class="stock-timeline">
        <div class="stockLine" ref="stockLine"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import config from '../../z3tougu/config'

    export default {
        name: 'stock-timeline',
        props: ['stockCode'],
        watch: {
            'stockCode': function() {
                if(this.stockCode){
                    this.$store.dispatch('bubbles/getStockLine', {
                        innerCode: this.stockCode
                    }).then(() => {
                        this.initStockLine()
                    })
                }
            }
        },
        methods: {
            autoTimeline(starts, ends) {
                var timeline = []
                var startHour = starts.split(':')[0] * 1
                var startMin = starts.split(':')[1] * 1
                var endHour = ends.split(':')[0] * 1
                var endMin = ends.split(':')[1] * 1
                for (var i = startHour; i <= endHour; i++) {
                    var start = (i === startHour) ? startMin : '0'
                    var end = (i === endHour) ? endMin : '59'
                    for (var j = start; j <= end; j++) {
                        j = (j < 10) ? '0' + j : j
                        timeline.push(i + ':' + j)
                    }
                }
                return timeline
            },
            initStockLine(){
                this.$nextTick(() => {
                    // DOM 更新了
                    this.lineChart = echarts.init(this.$refs.stockLine)
                    this.lineChart.showLoading(config.loadingConfig);
                    // 生成横坐标时间轴
                    let beforenoon = this.autoTimeline('9:30', '11:30')
                    let afternoon = this.autoTimeline('13:00', '15:00')
                    beforenoon.splice(beforenoon.length - 1, 1)
                    afternoon[0] = '11:30/13:00'
                    let timeline = beforenoon.concat(afternoon)
                    let stockData = this.$store.state.bubbles.stockLine

                    this.lineChart.setOption({
                        grid: {
                            left: 0,
                            top: 0,
                            bottom: 0,
                            right: 0
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'category',
                            axisLine: {
                                lineStyle: {
                                    color: '#343741',
                                    type: 'solid'
                                }
                            },
                            boundaryGap: false,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                interval: 29,
                                textStyle: {
                                    color: '#c9d0d7'
                                }
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    type: 'solid',
                                    color: '#343741'
                                }
                            },
                            data: timeline
                        }],
                        yAxis: [{
                            type: 'value',
                            scale: true,
                            axisLabel: {
                                formatter: function(val) {
                                    return val.toFixed(2)
                                },
                                textStyle: {
                                    color: '#c9d0d7'
                                }
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    type: 'solid',
                                    color: '#343741'
                                }
                            },
                            axisLine: {
                                show:false,
                                lineStyle: {
                                    color: '#343741',
                                    type: 'solid'
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }],
                        series: [{
                            name: '个股分时线',
                            showSymbol: false,
                            itemStyle: {
                                normal: {
                                    color: '#ffffff'
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            },
                            animation: false,
                            smooth: true,
                            type: 'line',
                            data: stockData
                        }]
                    })
                    this.lineChart.hideLoading()
                })



            }
        },
        destroyed() {
            this.lineChart && this.lineChart.dispose();
        }

    }
</script>

<style scoped>
.stockLine,.stock-timeline{
    width:100%;
    height:100%;
}

</style>