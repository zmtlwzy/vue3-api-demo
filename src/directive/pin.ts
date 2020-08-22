import { app } from '@/app'
app.directive('pin', {
    mounted(el, binding) {
        console.log(binding)
        el.style.position = 'fixed'
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    },
    updated(el, binding) {
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    }
})