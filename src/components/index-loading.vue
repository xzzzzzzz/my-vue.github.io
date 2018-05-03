<template>
	<div class="loading-tip" id="loading-tip">
		<div class="loading-tip-alpha">&nbsp;</div>
		<div class="loading-tip-text">正在处理</div>
	</div>	
</template>
<style scoped>

@keyframes loading {
	0% {
		transform: rotate(0deg);
	}

	25% {
		transform: rotate(50deg);
	}
	
	50% {
		transform: rotate(100deg);
	}
	
	75% {
		transform: rotate(220deg);
	}
	
	100% {
		transform: rotate(360deg);
	}
}

.loading-tip {

	background-color: #000;
	opacity:0.6;
	width: 240px;
	height: 240px;
	position:fixed;
	left:50%;
	top:50%;
	margin:-120px 0 0 -120px;
	border-radius: 10px;
	z-index:60;
}

.loading-tip-alpha{
	background:url(https://m.xgqq.com/static/img/loading.png) center center no-repeat;
	background-size:100% 100%;
	position: absolute;
	width: 120px;
	height: 120px;
	top: 50%;
	left: 50%;
	margin: -60px 0 0 -60px;
	-webkit-animation: loading 1.5s linear 0s infinite;
	animation: loading 1.5s linear 0s infinite;	
	
}
.loading-tip-text {
	display:none;
}
</style>

