<template>
  <div class="invoice-index">
    <div class="invoice-content">
      <div class="invoice-detail">
        详情。。。。。。。
      </div>
      <div class="invoice-form">
        <div class="content">
          表单。。。。。。
        </div>
        <div class="content">
          表单。。。。。。
        </div>
        <div class="content">
          表单。。。。。。
        </div>
        <div class="button">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next();
  }
};
</script>

<style scoped>
.invoice-index {
  position: relative;
  height: 400px;
  /* padding-bottom: 200px; */
  /* overflow: auto; */
}

.invoice-content {
  position: relative;
  height: 100%;
  overflow: auto;
}

.content {
  height: 900px;
  background: #ff0;
  width: 100%;
}

.content:nth-child(2) {
  height: 900px;
  background: #f00;
  width: 100%;
}

.invoice-detail {
  height: 200px;
  width: 100%;
  background: #f00;
}

.button {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  background: #000;
  color: #fff;
}
</style>
