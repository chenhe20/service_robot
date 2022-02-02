<template>
    <div>
        <h1 class="page-title">Welcome to the playground</h1>
        <div>
            <el-aside>
                <el-col :span="12">
                    <el-menu>
<!--                        <el-submenu index="1">-->
<!--                            <template slot="title">-->
<!--                                <i class="el-icon-location"></i>-->
<!--                                <span></span>-->
<!--                            </template>-->
<!--                            <el-menu-item-group>-->
<!--                                <template slot="title">分组一</template>-->
<!--                                <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--                                <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-menu-item-group title="分组2">-->
<!--                                <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--                            </el-menu-item-group>-->
<!--                            <el-submenu index="1-4">-->
<!--                                <template slot="title">选项4</template>-->
<!--                                <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--                            </el-submenu>-->
<!--                        </el-submenu>-->
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title" @click="createRandomCy">Generate</span>
                        </el-menu-item>
                        <el-menu-item index="2" >
                            <i class="el-icon-upload2"></i>
                            <span slot="title">Import</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-odometer"></i>
                            <span slot="title">Analysis</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">Settings</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-aside>
<!--            <el-button id="graphGenerateButton" @click="createRandomCy">Generate a random graph</el-button>-->
            <div id="cy" style="position: center">'
            </div>
        </div>

    </div>
</template>

<script>
    import cytoscape from 'cytoscape';

    export default {
        name: "Playground",
        created: {

        },
        mounted: {},
        methods: {
            createRandomCy() {
                console.log('hihihihi')
                var cy = cytoscape({
                    container: document.getElementById('cy')
                });
                cy.add({
                    group: 'nodes',
                    data: { weight: 75 },
                    position: { x: 200, y: 200 }
                });
                cy.add([
                    { group: 'nodes', data: { id: 'n0' }, position: { x: 100, y: 100 } },
                    { group: 'nodes', data: { id: 'n1' }, position: { x: 60, y: 150 } },
                    { group: 'nodes', data: { id: 'n2' }, position: { x: 20, y: 70 } },
                    { group: 'nodes', data: { id: 'n3' }, position: { x: 140, y: 40 } },
                    { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } },
                    { group: 'edges', data: { id: 'e1', source: 'n2', target: 'n3' } },
                    { group: 'edges', data: { id: 'e2', source: 'n0', target: 'n3' } }
                ]);
            }
        }
    }

</script>

<style scoped>
    .page-title {
        position: relative;
        margin: 5rem;
    }

    #cy {
        left: -10rem;
        margin: -10rem;
    }
</style>
