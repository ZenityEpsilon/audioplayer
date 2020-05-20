<template>
	<div class="fill-height">
		<h1>
			hello
		</h1>
		<v-btn big @click="i++">Play</v-btn>
		<br />{{ i }}
	</div>
</template>

<script>
export default {
	data: () => ({ i: 0 }),
};
</script>
