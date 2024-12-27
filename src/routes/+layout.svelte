<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	
	let { children } = $props();
</script>

<ModeWatcher />
{@render children()}
<p class="absolute bottom-0 right-0">© Lynn 2024 GPL-3.0</p>
