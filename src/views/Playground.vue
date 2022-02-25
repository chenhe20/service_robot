<template>
    <div style="height: 500px">
        <h1 class="page-title">Graph</h1>
            <el-aside>
                <el-col :span="15">
                    <el-menu>
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
            <div id="cy"></div>
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
                var cy = cytoscape({
                    container: document.getElementById('cy')
                });
                cy.add({
                    group: 'nodes',
                    data: { weight: 75 },
                    position: { x: 100, y: 100 }
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
        margin: -100rem;
    }
</style>
