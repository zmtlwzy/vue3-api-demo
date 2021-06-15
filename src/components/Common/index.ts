
import { reactive, toRefs, computed } from 'vue'
export const common = function () {
    const state = reactive({
        count: 0,
        count2: 10,
        count3: 100,
    });

    const add = () => {
        state.count++;
        state.count2 += 10;
        state.count3 += 100;
    };

    return {
        ...toRefs(state),
        add,
    };
};

export const sharedState = reactive({
    num: 0,
    num2: computed(() => sharedState.num + 1),
    num3: 2,
})