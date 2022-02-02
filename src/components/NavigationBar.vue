<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to="/introduction">Intro</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/playground">PlayGround</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link to="/about">About Author</router-link>
            </el-menu-item>
        </el-menu>


    </div>
</template>

<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>
    .navigation-bar-title {
        font-size: large;
    }
</style>
