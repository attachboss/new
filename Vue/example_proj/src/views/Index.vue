<template>
    <div class="Container">
        <p>This's Index首页</p>
        <div class="LoginIcon">
            <el-icon>
                <user />
            </el-icon>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import { User } from "@element-plus/icons"
export default {
    name: "Index",
    components: {
        User,
    },
    setup() {

        return {
        }
    }
}
</script>

<style scoped lang="scss">
.Container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to top, #dedede80, #5F9EA0);
    display: flex;

}
</style>