<template>
	<div class="dataScreen-container">
		<div class="dataScreen" ref="dataScreenRef">
			<div class="dataScreen-header">
				<div class="header-lf">
					<span class="header-screening">首页</span>
				</div>
				<div class="header-ct">
					<div class="header-ct-title">
						<span>迷你指挥旅游城市数据图</span>
						<div class="header-ct-warning">平台高峰预警信息(10条)</div>
					</div>
				</div>
				<div class="header-rg">
					<span class="header-download">统计报告</span>
					<span class="header-time">当前时间：2022-07-13</span>
				</div>
			</div>
			<div class="dataScreen-main">
				<div class="dataScreen-lf">
					<div class="dataScreen-top">
						<div class="dataScreen-main-title">
							<span>实时旅游统计</span>
							<img src="./images/dataScreen-title.png" alt="实时统计" />
						</div>
						<!-- chart -->
						<div class="dataScreen-main-chart">
							<RealTimeAccessChart ref="RealTimeAccessRef"></RealTimeAccessChart>
						</div>
					</div>
					<div class="dataScreen-center">
						<div class="dataScrrn-main-title">
							<span>男女比例</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart -->
						<div class="dataScreen-main-chart">
							<MaleFemaleRatioChart ref="MaleFemaleRatioRef" />
						</div>
					</div>
					<div class="dataScreen-bottom">
						<div class="dataScreen-main-title">
							<span>年龄比例</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart -->
						<div class="dataScreen-main-chart">
							<!-- <AgeRatioChart ref="AgeRatioRef" /> -->
						</div>
					</div>
				</div>
				<div class="dataScreen-ct">
					<div class="dataScreen-map">
						<div class="dataScreen-map-title">景区实时客流量</div>
						<mapChart ref="MapchartRef" />
					</div>
					<div class="dataScreen-cb">
						<div class="dataScreen-main-title">
							<span>未来30天游客量趋势图</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart -->
						<div class="dataScreen-main-chart">
							<!-- <OverNext30Chart ref="OverNext30Ref" /> -->
						</div>
					</div>
				</div>
				<div class="dataScreen-rg">
					<div class="dataScreen-top">
						<div class="dataScreen-main-title">
							<span>热门景区排行</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart -->
						<div class="dataScreen-main-chart">
							<!-- <HotPlateChart ref="HotPlateRef" /> -->
						</div>
					</div>
					<div class="dataScreen-center">
						<div class="dataScreen-main-title">
							<span>年度游客量对比</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart -->
						<div class="dataScreen-main-chart">
							<!-- <AnnualUseChart ref="AnnualUseRef" /> -->
						</div>
					</div>
					<div class="dataScreen-bottom">
						<div class="dataScreen-main-title">
							<span>预约渠道数据统计</span>
							<img src="./images/dataScreen-title.png" alt="" />
						</div>
						<!-- chart区域 -->
						<div class="dataScreen-main-chart">
							<!-- <PlatformSourceChart ref="PlatformSourceRef" /> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import RealTimeAccessChart from "./components/RealTimeAccessChart.vue";
import MaleFemaleRatioChart from "./components/MaleFemaleRatioChart.vue";
import mapChart from "./components/mapChart.vue";
/* 获取最外层盒子 */
const dataScreenRef = ref<HTMLElement | null>(null);
onMounted(() => {
	// 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
	if (dataScreenRef.value) {
		dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
		dataScreenRef.value.style.width = "1920px";
		dataScreenRef.value.style.height = "1080px";
	}
	window.addEventListener("resize", resize);
});

// 根据浏览器的能力大小推断缩放比例
const getScale = (width = 1920, height = 1080) => {
	let ww = window.innerWidth / width;
	let wh = window.innerHeight / height;
	return ww < wh ? ww : wh;
};

// 浏览器监听 resize 事件
const resize = () => {
	if (dataScreenRef.value) {
		dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
	}
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
