/**
 * Created by SnowWolf7 on 17/05/2018.
 */
/*
    加载js文件的要点：
        1、

 */

//定义margin,width,height用来设置svg的大小和g元素的位置。
var margin = {top: 200, right: 40, bottom: 200, left: 40},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var x = d3.scaleTime()
	.domain([new Date(2018, 1, 6), new Date(2018, 2, 17)])
	.rangeRound([0,width]);

//添加svg，并在svg中添加g元素用来添加时间坐标轴。
var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//绘制栅格
svg.append("g")
	.attr("class", "axis, axis--grid")
	.attr("transform", "translate(0, " + height + ")")
	.call(d3.axisBottom(x)
		.ticks(d3.timeDay.every(2))
		.tickSize(-height)
		.tickFormat(function(){return null;}))
	.selectAll(".tick")
	.classed("tick.minor", function(d) {return d.getHours();});
//绘制坐标线
svg.append("g")
	.attr("class", "axis, axis--x")
	.attr("transform", "translate(0, " + height + ")")
	.call(d3.axisBottom(x)
		.ticks(d3.timeDay.every(2))
		.tickPadding(0))
	.attr("text-anchor", null)
	.selectAll("text")
	.attr("x", 6);
