<style>
@import '../assets/css/reset.css';
.tit {
  border-bottom: 1px solid green;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
}
.item { position: relative; margin-bottom: 60px;}
.btn{ position: absolute; left:800px; top:20px;width: 100px;
text-align: center;
font-size: 16px;
color: #3e0f11;
float: left;
background: #00e2d4;
line-height: 40px;
border-radius: 10px;
box-shadow: 0 5px 0 0 #02867d;
color:#fff;
cursor: pointer;}
.item  li{ margin-bottom: 30px;}
.item span {
  width: 100px;line-height: 26px; padding-left: 40px;
}
.item select,.item input{ width:200px; height: 26px;font-size: 18px; outline: none;}
.item .long{ width:400px;}
.text{ width:680px; height: 150px;padding:0 10px;resize: none; outline: none; margin-left: 40px; font-size: 14px;}
</style>

<template>
<div class="dadian">
  <dadianBtn/>
  <div class="tit">查询条件</div>
  <div class="item">
    <ul>
      <li class="clearfix">
        <span class="fl">日期</span>
        <div class="fl">
          <dadianTime/>
        </div>
      </li>
      <li class="clearfix">
        <span class="fl">系统</span>
        <select class="fl" name="">
          <option value="">Android</option>
          <option value="">Ios</option>
        </select>
        <span class="fl">appversion</span>
        <select class="fl" name="">
          <option value="">6.5.0</option>
          <option value="">6.4.0</option>
          <option value="">6.3.0</option>
        </select>
      </li>
      <li class="clearfix">
        <span class="fl">d_name</span>
        <input type="text" class="fl" name="" value="">
        <span class="fl">devid</span>
        <input type="text" class="fl long" name="" value="">
      </li>
    </ul>
    <a href="javascript:;" class="btn">检索</a>
  </div>
  <div class="tit">语句查询</div>
  <div class="item">
    <textarea name="name" class="text">
      select * from appcms_parquet
          where d_name in(
          'click_zqcx_zqfx',
          'click_ztwz_qcx',
          'click_jysz_wc',
          'click_push_jysz',
          'click_xgrl_sgxq'
          )
          and ds='2017-06-19'and devid in('debug-uuid-03F43EA7-12DA-4130-BBD8-3BFA91C9E110')
          and appver='6.5.0'
    </textarea>
      <a href="javascript:;" class="btn">检索</a>
  </div>
  <div class="tit">结果</div>
  <JichushareToast/>
</div>
</template>

<script>
import dadianBtn from 'components/dadian-btn'
import dadianTime from 'components/dadian-time'
import JichushareToast from 'components/jichushare-toast'

export default {
  components: {
    dadianBtn,
    dadianTime,
    JichushareToast
  }
}
</script>
