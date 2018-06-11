<template>
  <div class="stockAll">
     <div class="name">
         <div class="notOpenstock">
             <i></i>未开板新股
         </div>
         <table>
             <thead>
                 <tr>
                 <th class="col-1">名称</th>
                 <th class="col-2">代码</th>
                 <th class="col-3">当前价格</th>
                 <th class="col-4">当前涨跌幅</th>
                 <th class="col-5">一字板数量</th>
                 <th class="col-6">昨日收盘价</th>
                 <th class="col-7">所属行业</th>
                 <th class="col-8">行业PE</th>
                 <th class="col-9">个股PE</th>
                 <th class="col-10"></th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                    <td class="col-1">00</td>
                    <td class="col-2">00</td>
                    <td class="col-3">00</td>
                    <td class="col-4">00</td>
                    <td class="col-5">00</td>
                    <td class="col-6">55</td>
                    <td class="col-7">66</td>
                    <td class="col-8">99</td>
                    <td class="col-9">22</td>
                    <td class="col-10"></td>
                    
                 </tr>
                 <tr>
                     <td>00</td>
                    
                 </tr>
                 <tr>
                     <td>00</td>
                    
                 </tr>
                 <tr>
                     <td>00</td>
                    
                 </tr>
             </tbody>

         </table>
     </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
    font-size: $fontSizeBase;
    color: $wordsColorBase;
}

.stockAll{
    padding: 27px 26px;
}
.notOpenstock{
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 6px;

}
.notOpenstock i{
    display: inline-block;
    width: 6px;
    height: 22px;
    border-radius: 2px;
    background-color: $bgNavColor;
    vertical-align: middle;
    margin-right: 5px
}
table {
    width: 100%;
    text-align: center;
    border-collapse:collapse;
}
table thead th{
    height: 28px;
    background-color: $bgConColor;
    border: 1px solid $borderColor;
}
table, th, td{
     border: 1px solid $borderColor;
     text-align: center;
}

.col-1{
    width: 100px;
}
.col-2, .col-3{
    width: 86px;
}
.clo-4{
    width: 114px;
}
.col-5{
    width:  108px;
}
.col-6{
    width: 123px;
}
.col-7{
    width: 102px;
}
.col-8{
    width: 102px;
    
}
.col-9{
    width: 100px;
}
.col-10{
    width: 70px;
}
</style>