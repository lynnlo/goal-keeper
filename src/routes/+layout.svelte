<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
{@render children()}
<p class="absolute bottom-0 right-0">© Lynn 2024 GPL-3.0</p>
