<template>
		<ul class="nav-bar-cont" :id="navKey">
			<nav-item
				v-for="(item, i) in items"
				:key="i"
				:id="navKey + String(i)"
				@click="$emit('linkClick', i, 'left')"
				:class="{active: (active === i)}">
				{{item}}
			</nav-item>
			<div class="active-bar-cont">
				<div :id="navKey + '-active-bar'" class="active-bar" :style="optStyle"></div>
			</div>

		</ul>
</template>
<script>
import navItem from "./navItem";
import anime from "animejs";
export default {
	name: "navBar",
	props: ["items", "active", "navKey", "dur", "activeBarColor"],
	components: {
		navItem
	},
	data() {
		return {
			keyPoints: [],
			optStyle: {
				borderColor: this.activeBarColor,
				boxShadow: "0 2px 4px 0 " + this.activeBarColor + ", 0 1px 1px 0 rgba(0, 0, 0, 0.3)"
			}
		};
	},
	methods: {
		animateActiveBar(pos) {
			debugger;
			console.log(anime);
			setTimeout(() => {
				console.log(anime.timeline());
				var timeline = anime.timeline();

				timeline.add({
					targets: "#" + this.navKey + "-active-bar",
					left: this.keyPoints[pos].startPoint + 16 * pos + "px",
					width: this.keyPoints[pos].elWidth + "px",
					duration: this.dur ? Number(this.dur) : 400,
					easing: "easeInOutQuart"
				});
				timeline.add({
					targets: "#" + this.navKey + "-active-bar",
					opacity: 1.0,
					duration: 200,
					easing: "linear",
					offset: "-=0"
				});
				console.log(this.keyPoints[pos].startPoint + 16 * pos + "px");
			});
		},
		positionActiveBar() {
			setTimeout(() => {
				var startPos =
					document.getElementById(this.navKey + "0").getBoundingClientRect().left -
					document.getElementById(this.navKey).getBoundingClientRect().left -
					8;
				this.keyPoints = this.items.map((item, i) => {
					const el = document.getElementById(this.navKey + String(i));
					var keyPoint = { elWidth: el.offsetWidth, startPoint: startPos };
					startPos = startPos + el.offsetWidth;
					return keyPoint;
				});
				// var activeBarStyle = document.getElementById(this.navKey + '-active-bar').style;
				// activeBarStyle.width = String(this.keyPoints[this.active].elWidth) + 'px';
				// activeBarStyle.position = 'relative';
				// activeBarStyle.left = String(this.keyPoints[this.active].startPoint) + 'px';
				// console.log(startPos);
			});
		}
	},
	mounted() {
		// this.positionActiveBar();
		// this.animateActiveBar(this.active);
		window.addEventListener("load", () => {
			this.positionActiveBar();
			this.animateActiveBar(this.active);
			console.log("calling position bar");
		});
	},
	updated() {
		// this.positionActiveBar();
		// this.animateActiveBar(this.active);
		window.addEventListener("load", () => {
			this.positionActiveBar();
			this.animateActiveBar(this.active);
		});
	},
	watch: {
		active(newState) {
			this.positionActiveBar();
			this.animateActiveBar(newState);
		}
	}
};
</script>
<style lang='scss'>
@import "../../styles/_variables.scss";
.nav-bar-cont {
	list-style: none;
	// display: inline-block;
	&.footer {
		.v-nav-link {
			color: $vest-dark;
		}
	}
}
.active-bar {
	box-shadow: 0 2px 4px 0 $vest-sky-blue, 0 1px 1px 0 rgba(0, 0, 0, 0.3);
	border-bottom: solid 2px $vest-sky-blue;
	box-sizing: border-box;
	height: 2px;
	margin-top: -2rem;
	position: relative;
	opacity: 0;
}
.active-bar-cont {
	padding: 0 0.8rem;
}
</style>
