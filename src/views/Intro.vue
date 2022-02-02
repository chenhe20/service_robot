<template>
    <div class="project-intro">
        <h1>Servicing the maximum number of nodes with time constraints</h1>
        <p>In a given graph some nodes are designated (by the user) as nodes needing servicing. <br>
            For each node v which needs servicing, the servicing has to happen at a specified time t(v). <br>
            The servicing is done by a robot which can move only from node to node along the edges of the graph.<br>
            Each edge (v,u) has a specified ‘travel time’ d(v,u): the robot takes d(v,u) time to move from v to u along the edge (v,u).<br>
            The problem here is to compute the route for the robot so that the robot services as many nodes which need servicing as possible.<br>
            Assume the robot starts at a specified origin node at time 0. Consider also the case when you have more than one robot.</p>
    </div>
</template>

<script>
    export default {
        name: "Intro"
    }
</script>

<style scoped>

</style>
